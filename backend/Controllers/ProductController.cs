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
    public async Task<ActionResult> getProductById(int id)
    {
        var product = await _applicationDbContext.Products.FindAsync(id);
        return Ok(product);
    }

     [HttpGet("products/nome/{nome}")]
    public async Task<ActionResult> getProductByNome(string nome)
    {
        var currentProduct = await _applicationDbContext.Products.SingleOrDefaultAsync(p => p.nome == nome);

        return Ok(currentProduct);
    }
    [HttpGet("sumPesoTotal")]
    public async Task<ActionResult> getSumPesoTotal()
    {
        var products = await _applicationDbContext.Products.ToListAsync();
        var sumPesoTotal = products.Sum(product => product.pesoTotal);
        return Ok(sumPesoTotal);
    }
    [HttpGet("sumVolumeTotal")]
    public async Task<ActionResult> getSumVolumeTotal()
    {
        var products = await _applicationDbContext.Products.ToListAsync();
        var sumVolumeTotal = products.Sum(product => product.volumeTotal);
        return Ok(sumVolumeTotal);
    }
    [HttpPost("products/addProduct")]
    public async Task<ActionResult> addProduct([FromBody] Product product)
    {
        var pesoTotal = product.peso * product.quantidade;
        var volumeTotal = product.volume * product.quantidade;

         product.pesoTotal = pesoTotal;
         product.volumeTotal =  volumeTotal;

        if (product == null){
            return BadRequest();
        }

        _applicationDbContext.Products.Add(product);

        await _applicationDbContext.SaveChangesAsync();

        return Created("Product created successfully", product);
    }

    [HttpDelete("products/{id}")]
    public async Task<ActionResult> deleteProduct(int id)
    {
        var product = await _applicationDbContext.Products.FindAsync(id);

        if (product == null)
        {
            return NotFound("Product not found");

        }
        _applicationDbContext.Products.Remove(product);
        await _applicationDbContext.SaveChangesAsync();
        return Ok("Container removed successfully");
    }
    [HttpDelete("products")]
    public async Task<ActionResult> deleteAllProducts()
    {
       foreach(var product in _applicationDbContext.Products) {

        _applicationDbContext.Remove(product);

       }
        await _applicationDbContext.SaveChangesAsync();
        return Ok("All products removed successfully");
    }

    [HttpPut("products/{id}")]
    public async Task<ActionResult> updateProduct(int id, [FromBody] Product product)
    {
        var productCurrent = await _applicationDbContext.Products.FindAsync(id);

        if (productCurrent == null)
        {
            return NotFound();

        }
        var pesoTotal = product.peso * product.quantidade;
        var volumeTotal = product.volume * product.quantidade;

        product.pesoTotal = pesoTotal;
        product.volumeTotal = volumeTotal;

        productCurrent.nome = product.nome;
        productCurrent.quantidade = product.quantidade;
        productCurrent.peso = product.peso;
        productCurrent.volume =  product.volume;
        productCurrent.pesoTotal =  product.pesoTotal;
        productCurrent.volumeTotal = product.volumeTotal;

       _applicationDbContext.Products.Update(productCurrent);
        await _applicationDbContext.SaveChangesAsync();
        return Ok("Product updated successfully");
    }
}