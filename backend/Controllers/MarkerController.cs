using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[Controller]
public class MarkerController : ControllerBase
{

    private readonly ApplicationDbContext _applicationDbContext;
    public MarkerController(ApplicationDbContext applicationDbContext)
    {

        _applicationDbContext = applicationDbContext;

    }

    [HttpGet("markers/states")]
    public async Task<ActionResult<List<State>>> getAllStates()
    {
        var states = await _applicationDbContext.States.ToListAsync();
        return Ok(states);
    }
      [HttpGet("markers/states/{id}")]
    public async Task<ActionResult> getMarker(int id)
    {

        var state = await _applicationDbContext.States.FindAsync(id);

        return Ok(state);
      

    
    }
    [HttpPost("markers/state")]
    public async Task<ActionResult> createMarkerByState([FromBody] State state)
    {
    
        _applicationDbContext.States.Add(state);

        await _applicationDbContext.SaveChangesAsync();

        return Created("State created successfully", state);
    }
     [HttpGet("markers/ports")]
    public async Task<ActionResult<List<PortMarker>>> getAllMarkerByPort()
    {
        var markers = await _applicationDbContext.PortMarkers.Include(p => p.state).ToListAsync();

      
        return Ok(markers);
        }

         
    [HttpGet("markers/{stateId}/ports")]
    public async Task<ActionResult<List<PortMarker>>> getAllPortByState(int stateId)
    {
        

        var state = await _applicationDbContext.States.FindAsync(stateId);
        var markers = await _applicationDbContext.PortMarkers.Where(p => p.stateId == state.id).ToListAsync();
        return Ok(markers);
    }

    
    [HttpGet("markers/ports/{id}")]
    public async Task<ActionResult<List<PortMarker>>> getAllPortByState(int stateId, int id)
    {
        
        var markers = await _applicationDbContext.PortMarkers.Where(p => p.id == id).ToListAsync();
        return Ok(markers);
    }

    [HttpPost("markers/port")]
    public async Task<ActionResult> createMarkerByPort([FromBody] PortMarker portMarker)
    {
      
        _applicationDbContext.PortMarkers.Add(portMarker);

        await _applicationDbContext.SaveChangesAsync();

        return Created("Port created successfully", portMarker);
    }

    [HttpDelete("markers/ports/{id}")]
    public async Task<ActionResult> deleteMarkerByPort(int id)
    {
        var marker = await _applicationDbContext.PortMarkers.FindAsync(id);

        _applicationDbContext.PortMarkers.Remove(marker);
        await _applicationDbContext.SaveChangesAsync();
        return Ok("Port removed successfully");
    }
}