
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
    public async Task<ActionResult<List<Container>>> getAllContainer()
    {
        var containers = await _applicationDbContext.Containers.ToListAsync();
        return Ok(containers);
    }
    [HttpPost("containers/createContainer")]
    public async Task<ActionResult> createContainer( [FromForm] Container container, IFormFile pic) {
      
  
        string FilePath = Path.Combine(Directory.GetCurrentDirectory(), "Images", pic.FileName);
        pic.CopyTo(new FileStream(FilePath, FileMode.Create));
         
        container.image = $"{HttpContext.Request.Scheme}://{HttpContext.Request.Host}/Images/{pic.FileName}";

         container.capacidadePeso =  container.capacidadePeso * 1000;
        _applicationDbContext.Containers.Add(container);

        await _applicationDbContext.SaveChangesAsync();

        return Created("Container created successfully", container);
    }
     [HttpGet("containers/{id}")]
    public async Task<ActionResult> getContainerById (int id)
    {

        var container = await _applicationDbContext.Containers.FindAsync(id);
       
            return Ok(container);

    }
   

    [HttpGet("containers/capacity/{id}")]
    public async Task<ActionResult> verfiqueCapacityProduct(int id)
    {

        var container = await _applicationDbContext.Containers.FindAsync(id);
        var products = await _applicationDbContext.Products.ToListAsync();

        var sumVolumeTotal = products.Sum(product => product.volumeTotal);
        var sumPesoTotal = products.Sum(product => product.pesoTotal);


        if (sumPesoTotal <= container.capacidadePeso && sumVolumeTotal <= container.capacidadeVolume)
        {
            return Ok(container);

        }
        else
        {
            return Ok("Esse tipo de contêiner não cabe");
        }
    }
    
    [HttpDelete("containers/{id}")]
    public async Task<ActionResult> deleteContainer(int id)
    {
        var container = await _applicationDbContext.Containers.FindAsync(id);


        if (container == null)
        {
            return NotFound("Container not found");

        }
        _applicationDbContext.Containers.Remove(container);
        await _applicationDbContext.SaveChangesAsync();
        return Ok("Container removed successfully");
    }
}