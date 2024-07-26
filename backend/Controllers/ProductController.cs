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
    [HttpGet("products/totalPeso")]
    public async Task<ActionResult> getTotalPeso()
    {
        var total_peso = await _applicationDbContext.Products.SumAsync(product => product.peso);
        return Ok(total_peso);
    }
    [HttpGet("products/totalVolume")]
    public async Task<ActionResult> getTotalVolume()
    {
        var total_volume = await _applicationDbContext.Products.SumAsync(product => product.volume);
        return Ok(total_volume);
    }
    [HttpPost("createProduct")]
    public async Task<ActionResult> createProduct([FromBody] Product product)
    {
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
}