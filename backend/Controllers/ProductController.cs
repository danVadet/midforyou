namespace backend.Controllers;

using AutoMapper;
using backend.Models;
using backend.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[Controller]
public class ProductController : ControllerBase
{
    private readonly IProductService _productService;
    
    public ProductController(IProductService productService)
    {
        _productService = productService;

    }
     [HttpGet("products")]
    public async Task<ActionResult> getAllProducts( [FromQuery] string search)
    {
        List <ProductResponse>  products = await _productService.GetAllAsync();

          if(!string.IsNullOrEmpty(search)) {
            products = products.Where(p => p.nome.ToLower().StartsWith(search.ToLower())).ToList();
            return Ok(products);
        } else {
              return Ok(products);
        }
    }

    [HttpGet("products/{id}")]
    public async Task<ActionResult> getProductById(int id)
    {
        ProductResponse product = await _productService.GetByIdAsync(id);
       return Ok(product);
    }
    [HttpGet("sumPesoTotal")]
    public async Task<ActionResult> getSumPesoTotal()
    {
        List <ProductResponse>  products = await _productService.GetAllAsync();
        var sumPesoTotal = products.Sum(product => product.pesoTotal);
        return Ok(sumPesoTotal);
    }
    [HttpGet("sumVolumeTotal")]
    public async Task<ActionResult> getSumVolumeTotal()
    {
        List <ProductResponse>  products = await _productService.GetAllAsync();
        var sumVolumeTotal = products.Sum(product => product.volumeTotal);
        return Ok(sumVolumeTotal);
    }
    [HttpPost("products/addProduct")]
    public async Task<ActionResult> addProduct([FromBody] ProductRequest productRequest)
    {

        if (productRequest == null){
            return BadRequest();
        } else {
            await _productService.CreateAsync(productRequest);
            return Created("Product created successfully", productRequest);
        }

       }

    [HttpDelete("products/{id}")]
    public async Task<ActionResult> deleteProduct(int id)
    {
        ProductResponse product = await _productService.GetByIdAsync(id);

        if (product == null) {
            return NotFound("Product not found");
        } else {
            await _productService.DeleteAsync(product.id);
            return Ok("Product removed successfully");
        }
    }
    [HttpDelete("products")]
    public async Task<ActionResult> deleteAllProducts()
    {

       List <ProductResponse>  products = await _productService.GetAllAsync();

       foreach (ProductResponse product in products) {
           await _productService.DeleteAsync(product.id);
       }
        return Ok("All products removed successfully");
    }

    [HttpPut("products/{id}")]
    public async Task<ActionResult> updateProduct(int id, [FromBody] ProductRequest productRequest)
    {
        ProductResponse productCurrent = await _productService.GetByIdAsync(id);


        if (productCurrent == null) {
            return NotFound("Product not found");
        } else {
              await _productService.UpdateAsync(id, productRequest);
            return Ok("Product updated successfully");
        }            
    }

}