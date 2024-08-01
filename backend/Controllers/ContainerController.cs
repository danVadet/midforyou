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
    public async Task<ActionResult<List <Container>>> getAllContainer()
    {
        var containers = await _applicationDbContext.Containers.ToListAsync();
        return Ok(containers);
    }   
    [HttpPost("containers/createContainer")]
    public async Task <ActionResult> createContainer ([FromBody] Container  container) 
    {
    
        _applicationDbContext.Containers.Add(container);

        await _applicationDbContext.SaveChangesAsync();

        return Created("Container created successfully", container);
    } 

    [HttpGet("containers/capacity")]
    public async Task<ActionResult> verfiqueCapacityProduct()
    {
        var containers = await _applicationDbContext.Containers.ToListAsync();
         var products = await _applicationDbContext.Products.ToListAsync();

        var sumVolumeTotal = products.Sum(product => product.volumeTotal);
        var sumPesoTotal = products.Sum(product => product.pesoTotal);


        foreach (var container in containers) {
           container.capacidadePeso = 29;
            if(sumPesoTotal <= container.capacidadePeso){
                return Ok("Cabe peso de produtos no container dry 40");

            }
             if(sumVolumeTotal <= container.capacidadeVolume){
                container.capacidadePeso = 68;
                return Ok("Cabe volume de produtos no container dry 40");

            }
        }
           

        return Ok();
    }  
    

         
}