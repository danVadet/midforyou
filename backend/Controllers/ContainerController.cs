using backend.DTOs;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers;


[Controller]
public class ContainerController : ControllerBase
{

    private readonly ApplicationDbContext _applicationDbContext;
    public ContainerController(ApplicationDbContext applicationDbContext)
    {

        _applicationDbContext = applicationDbContext;

    }

    [HttpGet("containers")]
    public async Task<ActionResult> getAllContainer()
    {
        var containers = await _applicationDbContext.Containers.Include(c => c.products).ToListAsync();
        return Ok(containers);
    }

    [HttpGet("/{productId}")]
    public async Task<ActionResult<List<Container>>> get (int productId) 
    {

        var containers =  await _applicationDbContext.Containers.Where(c => c.productId == productId).ToListAsync();
        return Ok(containers);

    }
    [HttpPost("createContainer")]
    public async Task<ActionResult<List<Container>>> createContainer([FromBody] CreateContainerRequest containerRequest)

    {
        var  product = await _applicationDbContext.Products.FindAsync(containerRequest.productId);

        if(product == null){
            return BadRequest();
        }
    

        var newContainer =  new Container {
            quantity = containerRequest.quantity,
            products  = containerRequest.products,
            product = product
        };

       
        _applicationDbContext.Containers.Add(newContainer);

        await _applicationDbContext.SaveChangesAsync();

        return await get(newContainer.productId);
    }
    [HttpPut("/containers/{containerId}/{productId}")]
    public async Task<ActionResult<int>> addProduct (int containerId, int productId) {
        var  product = await _applicationDbContext.Products.FindAsync(productId);
        var container = await _applicationDbContext.Containers.FindAsync(containerId);


        if(product == null){
            return BadRequest();
        }
    
        // Adicionar o produto no  container  id
        container.products.Add(product);

        // Contagem de quantidade de produtos
        container.quantity =  container.products.Count;


        
    

        return container.quantity;
    }
    
    
}