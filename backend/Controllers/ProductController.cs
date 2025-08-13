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
        
       List <ProductResponse> products = await _productService.GetAllAsync();

        if (!String.IsNullOrEmpty(search))
        {
            products = await _productService.GetAllBySearch(search);

            return Ok(products);
        }
        return Ok(products);
    }
    [HttpGet("weightUnits")]
    public IActionResult getAllWeightUnits()
    {

     var weightUnits = Enum.GetNames(typeof(WeightUnit));
     return Ok(weightUnits);
    }

    [HttpGet("measureUnits")]
    public IActionResult getAllMeasureUnits()
    {

     var measureUnits = Enum.GetNames(typeof(MeasureUnit));
     return Ok(measureUnits);
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

        List <ProductResponse> products = await _productService.GetAllAsync();

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

        var sumWeightTotalLb = products.FindAll(p => p.weightUnit == WeightUnit.lb) .Sum(product => product.weightTotal);
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

        await _productService.UpdateAsync(id, updateProductRequest);
        return Ok("Product updated successfully");
    }

}