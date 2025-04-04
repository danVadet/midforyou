
using backend.Data;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers;

[Controller]
public class ProductController : ControllerBase
{
    private readonly AppDbContext _appDbContext;
    public ProductController(AppDbContext appDbContext)
    {
        _appDbContext = appDbContext;

    }

    [HttpGet("products")]
    public async Task<ActionResult> getAllProducts([FromQuery] string search)
    {

        var products = await _appDbContext.Products.ToListAsync();

        if(!String.IsNullOrEmpty(search)) {
            products = await _appDbContext.Products.Where(product =>product.name.ToLower().StartsWith(search.ToLower())).ToListAsync();
            return Ok(products);
        }
        return Ok(products);
    }

    [HttpGet("products/{id}")]
    public async Task<ActionResult> getProduct(int id)
    {
        var product = await _appDbContext.Products.FindAsync(id);
        return Ok(product);
    }
     [HttpDelete("products")]
    public async Task<ActionResult> deleteAllProducts()
    {

        var products = await _appDbContext.Products.ToListAsync();

        foreach (var Item in products) 
    { 
        //Remove
        _appDbContext.Products.Remove(Item); 
    }
    _appDbContext.SaveChanges();
    return Ok("All products are deleted");
 //imp
    }

    [HttpGet("sumTotalWeight")]
    public async Task<ActionResult> getTotalWeight()
    {
        var products = await _appDbContext.Products.ToListAsync();
        var sumWeightTotal = products.Sum(product => product.weightTotal);
        return Ok(sumWeightTotal);
    }
    [HttpGet("sumTotalVolume")]
    public async Task<ActionResult> getSumTotalVolume()
    {
        var products = await _appDbContext.Products.ToListAsync();
        var sumVolumeTotal = products.Sum(product => product.volumeTotal);
        return Ok(sumVolumeTotal);
    }
    [HttpPost("products/addProduct")]
    public async Task<ActionResult> addProduct([FromBody] Product product)
    {
        product.weightTotal = product.weight * product.quantity;
        product.volume =  product.length * product.width * product.height;
        product.volumeTotal = product.volume * product.quantity;

        if (product == null){
            return BadRequest();
        }

        _appDbContext.Products.Add(product);
        await _appDbContext.SaveChangesAsync();

        return Created("Product created successfully", product);
    }
    [HttpDelete("products/{id}")]
    public async Task<ActionResult> deleteProduct(int id)
    {
        Product product = await _appDbContext.Products.FindAsync(id);
        _appDbContext.Products.Remove(product);
        await _appDbContext.SaveChangesAsync();
        return Ok(product);
    }
    [HttpPut("products/{id}")]
    public async Task<ActionResult> updateProduct(int id, [FromBody] Product product)
    {

        var productCurrent = await _appDbContext.Products.FindAsync(id);

        if (productCurrent == null)
        {
            return NotFound();

        }

        var weightTotal = product.weight * product.quantity;
        var volumeTotal = product.length * product.width * product.height * product.quantity;

        product.weightTotal = weightTotal;
        product.volumeTotal = volumeTotal;

        productCurrent.name = product.name;
        productCurrent.length = product.length;
        productCurrent.width = product.width;
        productCurrent.height = product.height;
        productCurrent.weight = product.weight;
        productCurrent.quantity = product.quantity;
        productCurrent.weightTotal =  product.weightTotal;
        productCurrent.volumeTotal = product.volumeTotal;
        _appDbContext.Update(productCurrent);
        await _appDbContext.SaveChangesAsync();
        return Ok("Product updated successfully");
    }

}