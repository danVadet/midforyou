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
    [HttpPost("addProduct")]
    public async Task<ActionResult> addProduct([FromBody] Product product)
    {
        var pesoTotal = product.peso * product.quantidade;
        var volumeTotal = product.volume * product.quantidade;

    

        _applicationDbContext.Products.Add(product);

        var containers  = new Container {

        
            products = new List<Product>(){
                new Product(){
                    id = product.id,
                    nome =  product.nome,
                    peso = product.peso,
                    quantidade = product.quantidade,
                    volume  =  product.volume,
                    pesoTotal =  pesoTotal,
                    volumeTotal =  volumeTotal

            }
        }
        };
        _applicationDbContext.Containers.Add(containers);

        await _applicationDbContext.SaveChangesAsync();

        return Ok(containers);
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