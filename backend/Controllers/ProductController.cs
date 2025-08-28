using backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;

[Controller]
public class ProductController : ControllerBase
{
    private readonly IProductService _productService;

    public ProductController(IProductService productService)
    {
        _productService = productService;
    }

    [HttpGet("products")]
    public async Task<IActionResult> getAllProducts([FromQuery] string search)
    {

        List<ProductResponse> products = await _productService.GetAllAsync();

        if (!String.IsNullOrEmpty(search))
        {
            products = await _productService.GetAllBySearch(search);

            return Ok(products);
        }
        return Ok(products);
    }
    [HttpGet("measureUnits/{weightUnit}")]
    public IActionResult getAllMeasureUnits([FromQuery] string lang, WeightUnit weightUnit)
    {
          List<object> measureUnits;
        List<object> weightUnits;
        if (lang == "en")
        {

            if (weightUnit == WeightUnit.lb)
            {

                measureUnits = new List<object>
                {
                new { value = MeasureUnit.ft, label = "feet" },
                new { value = MeasureUnit.inch, label = "inch" },
                new { value = MeasureUnit.yd, label = "yard" }
                };

                weightUnits = new List<object>
                {
                new { value = WeightUnit.lb, label = "pound" },
                };
            }
            else
            {

                measureUnits = new List<object>
                {
                new { value = MeasureUnit.m, label = "meter" },
                new { value = MeasureUnit.cm, label = "centimeter" },
                new { value = MeasureUnit.mm, label = "millimeter" },
                };

                weightUnits = new List<object>
                {
                new { value = WeightUnit.kg, label = "kilogram" },
                new { value = WeightUnit.g, label = "gram" },
                };
            }

            return Ok(new { measureUnits, weightUnits });
        }

        else if (lang == "es")
        {

            if (weightUnit == WeightUnit.lb)
            {

                measureUnits = new List<object>
                {
                new { value = MeasureUnit.ft, label = "pie" },
                new { value = MeasureUnit.inch, label = "pulgada" },
                new { value = MeasureUnit.yd, label = "patio" }
                };

                weightUnits = new List<object>
                {
                new { value = WeightUnit.lb, label = "libra" },
                };
            }
            else
            {

                measureUnits = new List<object>
                {
                new { value = MeasureUnit.m, label = "metro" },
                new { value = MeasureUnit.cm, label = "centímetro" },
                new { value = MeasureUnit.mm, label = "milímetro" },
                };
                weightUnits = new List<object>
                {
                new { value = WeightUnit.kg, label = "kilogramo" },
                new { value = WeightUnit.g, label = "gramo" },
                };
            }

            return Ok(new { measureUnits, weightUnits });
        }

        else
        {
            if (weightUnit == WeightUnit.lb)
            {

                measureUnits = new List<object>
                {
                new { value = MeasureUnit.ft, label = "pé" },
                new { value = MeasureUnit.inch, label = "polegada" },
                new { value = MeasureUnit.yd, label = "jarda" }
                };

                weightUnits = new List<object>
                {
                new { value = WeightUnit.lb, label = "libra" },
                };
            }
            else
            {

                measureUnits = new List<object>
                {
                new { value = MeasureUnit.m, label = "metro" },
                new { value = MeasureUnit.cm, label = "centímetro" },
                new { value = MeasureUnit.mm, label = "milímetro" },
                };

                weightUnits = new List<object>
                {
                new { value = WeightUnit.kg, label = "quilograma" },
                new { value = WeightUnit.g, label = "grama" },
                };
            }
            return Ok(new { measureUnits, weightUnits });

        }
    }

    [HttpGet("products/{id}")]
    public async Task<IActionResult> getProduct(int id)
    {
        ProductResponse product = await _productService.GetByIdAsync(id);
        return Ok(product);
    }
    [HttpDelete("products")]
    public async Task<IActionResult> deleteAllProducts()
    {

        List<ProductResponse> products = await _productService.GetAllAsync();

        foreach (var Item in products)
        {
            await _productService.DeleteAsync(Item.id);

        }
        return Ok("All products are deleted");
        //
    }

    [HttpGet("sumTotalWeight")]
    public async Task<IActionResult> getTotalWeight()
    {
        List<ProductResponse> products = await _productService.GetAllAsync();

        var sumWeightTotalLb = products.FindAll(p => p.weightUnit == WeightUnit.lb).Sum(product => product.weightTotal);
        var sumWeightTotalKg = products.FindAll(p => p.weightUnit == WeightUnit.kg || p.weightUnit == WeightUnit.g).Sum(product => product.weightTotal);

        return Ok(new { sumWeightTotalLb, sumWeightTotalKg });

    }
    [HttpGet("sumTotalVolume")]
    public async Task<ActionResult> getSumTotalVolume()
    {
        List<ProductResponse> products = await _productService.GetAllAsync();

        var sumVolumeTotalFt3 = products.FindAll(p => p.measureUnit == MeasureUnit.ft || p.measureUnit == MeasureUnit.yd || p.measureUnit == MeasureUnit.inch).Sum(product => product.volumeTotal);
        var sumVolumeTotalM3 = products.FindAll(p => p.measureUnit == MeasureUnit.m).Sum(product => product.volumeTotal);

        return Ok(new { sumVolumeTotalFt3, sumVolumeTotalM3 });

    }

    [HttpGet("sumTotalQuantity")]
    public async Task<IActionResult> getTotalQuantity()
    {
        List<ProductResponse> products = await _productService.GetAllAsync();
        var quantityTotal = products.Sum(product => product.quantity);
        return Ok(quantityTotal);
    }
    [HttpPost("products/addProduct")]
    public async Task<IActionResult> addProduct([FromBody] CreateProductRequest createProductRequest)
    {

        await _productService.CreateAsync(createProductRequest);
        return Created("Product created successfully", createProductRequest);
    }
    [HttpDelete("products/{id}")]
    public async Task<IActionResult> deleteProduct(int id)
    {
        ProductResponse product = await _productService.DeleteAsync(id);
        return Ok(product);
    }
    [HttpPut("products/{id}")]
    public async Task<IActionResult> updateProduct(int id, [FromBody] UpdateProductRequest updateProductRequest)
    {

        updateProductRequest.id = id;
        await _productService.UpdateAsync(updateProductRequest);
        return Ok("Product updated successfully");
    }

}