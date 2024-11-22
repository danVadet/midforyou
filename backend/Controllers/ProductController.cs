using AutoMapper;
using backend.Models;

using backend.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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
    public async Task<ActionResult> getAllProducts( [FromQuery] string search)
    {
        var products = await _productService.GetAllAsync();
          if(!string.IsNullOrEmpty(search)) {
            products = products.Where(p => p.nome.Contains(search)).ToList();
            return Ok(products);
        } else {
              return Ok(products);
        }
      
    }

    [HttpGet("products/{id}")]
    public async Task<ActionResult> getProductById(int id)
    {
        Product product = await _productService.GetByIdAsync(id);
       return Ok(product);
    }
    [HttpGet("sumPesoTotal")]
    public async Task<ActionResult> getSumPesoTotal()
    {
        List<Product> products = await _productService.GetAllAsync();
        var sumPesoTotal = products.Sum(product => product.pesoTotal);
        return Ok(sumPesoTotal);
    }
    [HttpGet("sumVolumeTotal")]
    public async Task<ActionResult> getSumVolumeTotal()
    {
        List<Product> products = await _productService.GetAllAsync();
        var sumVolumeTotal = products.Sum(product => product.volumeTotal);
        return Ok(sumVolumeTotal);
    }
    [HttpPost("products/addProduct")]
    public async Task<ActionResult> addProduct([FromBody] ProductDTO productDTO)
    {
        var pesoTotal = productDTO.peso * productDTO.quantidade;
        var volumeTotal = productDTO.volume * productDTO.quantidade;

         productDTO.pesoTotal = pesoTotal;
         productDTO.volumeTotal =  volumeTotal;

        if (productDTO == null){
            return BadRequest();
        }
      await _productService.CreateAsync(productDTO);

        return Created("Product created successfully", productDTO);
    }

    [HttpDelete("products/{id}")]
    public async Task<ActionResult> deleteProduct(int id)
    {
        Product product = await _productService.GetByIdAsync(id);

        if (product == null)
        {
            return NotFound("Product not found");

        }
        await _productService.DeleteAsync(product);
        return Ok("Product removed successfully");
    }
    [HttpDelete("products")]
    public async Task<ActionResult> deleteAllProducts()
    {
       List<Product> products = await _productService.GetAllAsync();

       foreach (Product product in products) {
           await _productService.DeleteAsync(product);
       }
        return Ok("All products removed successfully");
    }

    [HttpPut("products/{id}")]
    public async Task<ActionResult> updateProduct(int id, [FromBody] ProductDTO productDto)
    {
        var productCurrent = await _productService.GetByIdAsync(id);

        if (productCurrent == null)
        {
        return NotFound("Product not found");

        }
        var pesoTotal = productDto.peso * productDto.quantidade;
        var volumeTotal = productDto.volume * productDto.quantidade;

        productDto.pesoTotal = pesoTotal;
        productDto.volumeTotal = volumeTotal;

        if(productDto.nome != null)
        productCurrent.nome = productDto.nome;
        productCurrent.quantidade = productDto.quantidade;
        productCurrent.peso = productDto.peso;
        productCurrent.volume =  productDto.volume;
        productCurrent.pesoTotal =  productDto.pesoTotal;
        productCurrent.volumeTotal = productDto.volumeTotal;

 
        await _productService.UpdateAsync(productCurrent);
        return Ok("Product updated successfully");
    }

}