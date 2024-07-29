using backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers;

[Controller]
public class ProductController : ControllerBase
{
    private readonly ApplicationDbContext _applicationDbContext;
    public ProductController(ApplicationDbContext applicationDbContext)
    {
        _applicationDbContext = applicationDbContext;

    }

    [HttpGet("products")]
    public async Task<ActionResult> getAllProducts()
    {
        var products = await _applicationDbContext.Products.ToListAsync();
        return Ok(products);
    }
    [HttpGet("products/{id}")]
    public async Task<ActionResult> getProduct(int id)
    {
        var product = await _applicationDbContext.Products.FindAsync(id);
        return Ok(product);
    }
    [HttpPost("createProduct")]
    public async Task<ActionResult> createProduct([FromBody] Product product)
    {
        var pesoTotal = product.peso * product.quantidade;
        var volumeTotal = product.volume * product.quantidade;

        product.pesoTotal = pesoTotal;
        product.volumeTotal = volumeTotal;

        _applicationDbContext.Products.Add(product);

        await _applicationDbContext.SaveChangesAsync();

        return Created("Product object", product);
    }

    [HttpDelete("products/{id}")]
    public async Task<ActionResult> deleteProduct(int id)
    {
        var product = await _applicationDbContext.Products.FindAsync(id);


        if (product == null)
        {
            return NotFound();

        }
        _applicationDbContext.Products.Remove(product);
        await _applicationDbContext.SaveChangesAsync();
        return Ok();
    }

    [HttpPut("products/{id}")]
    public async Task<ActionResult> updateProduct(int id, [FromBody] Product updateProduct)
    {
        var product = await _applicationDbContext.Products.FindAsync(id);

        if (product == null)
        {
            return NotFound();

        }
        var pesoTotal = updateProduct.peso * updateProduct.quantidade;
        var volumeTotal = updateProduct.volume * updateProduct.quantidade;

        updateProduct.pesoTotal = pesoTotal;
        updateProduct.volumeTotal = volumeTotal;

        _applicationDbContext.Products.Update(updateProduct);
        await _applicationDbContext.SaveChangesAsync();
        return Ok();
    }
}