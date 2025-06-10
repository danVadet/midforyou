

using backend.Domain;
using backend.Infrastructure;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers;


[Controller]
public class PortStateController : ControllerBase
{
    private readonly AppDbContext _appDbContext;
    public PortStateController(AppDbContext appDbContext)
    {
        _appDbContext = appDbContext;

    }

    [HttpGet("states")]
    public async Task<ActionResult> getAllStates()
    {

        var portStates = await _appDbContext.PortState.ToListAsync();
        return Ok(portStates);
    }

    [HttpGet("states/{id}")]
    public async Task<ActionResult> getProduct(int id)
    {
        var state = await _appDbContext.PortState.FindAsync(id);
        return Ok(state);
    }
    [HttpPost("states/addState")]
    public async Task<ActionResult> addProduct([FromBody] PortState portState)
    {

        _appDbContext.Add(portState);

        await _appDbContext.SaveChangesAsync();

        return Created("State created successfully", portState);
    }
}