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

    [HttpGet("containers/pesoTotal")]
    public async Task<ActionResult> getSumOfAllProductsByTotalPeso()
    {
        var containers = await _applicationDbContext.Containers.Include(c => c.products).ToListAsync();
        return Ok(containers);
    }   
     [HttpGet("containers/volumeTotal")]
    public async Task<ActionResult> getSumOfAllProductsByTotalVolume()
    {
        var containers = await _applicationDbContext.Containers.Include(c => c.products).ToListAsync();
        return Ok(containers);
    }   
    
    
}