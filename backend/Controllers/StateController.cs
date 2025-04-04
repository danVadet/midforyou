

using backend.Data;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers;


[Controller]
public class StateController : ControllerBase
{
    private readonly AppDbContext _appDbContext;
    public StateController(AppDbContext appDbContext)
    {
        _appDbContext = appDbContext;

    }

    [HttpGet("states")]
    public async Task<ActionResult> getAllStates()
    {

        var states = await _appDbContext.States.ToListAsync();
        return Ok(states);
    }

    [HttpGet("states/{id}")]
    public async Task<ActionResult> getProduct(int id)
    {
        var state = await _appDbContext.States.FindAsync(id);
        return Ok(state);
    }
    [HttpPost("states/addState")]
    public async Task<ActionResult> addProduct([FromBody] State state)
    {
        
        _appDbContext.States.Add(state);

        await _appDbContext.SaveChangesAsync();

        return Created("State created successfully", state);
    }
}