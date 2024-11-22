using backend.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[Controller]
public class MarkerController : ControllerBase
{

     private readonly IStateService _stateService;
    private readonly IPortService _portService;
    public MarkerController( IStateService stateService, IPortService portService)
    {

        _portService = portService;
        _stateService = stateService;

    }

    [HttpGet("markers/states")]
    public async Task<ActionResult<List<State>>> getAllStates()
    {
        List <State> states = await _stateService.GetAllAsync();
        return Ok(states);
    }
      [HttpGet("markers/states/{id}")]
    public async Task<ActionResult> getMarker(int id)
    {

        State state = await _stateService.GetByIdAsync(id);

        return Ok(state);
      

    
    }
    [HttpPost("markers/state")]
    public async Task<ActionResult> createMarkerByState([FromBody] State state)
    {
    
        await _stateService.CreateAsync(state);
        return Created("State created successfully", state);
    }
     [HttpGet("markers/ports")]
    public async Task<ActionResult<List<PortMarker>>> getAllMarkerByPort()
    {
        var markers = await _portService.GetAllPortsByState();

      
        return Ok(markers);
        }

         
    [HttpGet("markers/{stateId}/ports")]
    public async Task<ActionResult<List<PortMarker>>> getAllPortByState(int stateId)
    {
        
        var markers = await _portService.GetPortByState(stateId);
        return Ok(markers);
    }

    
    [HttpGet("markers/ports/{id}")]
    public async Task<ActionResult<List<PortMarker>>> getAllPortById(int id)
    {
        
        var markers = await _portService.GetAllPortsById(id);
        return Ok(markers);
    }

    [HttpPost("markers/port")]
    public async Task<ActionResult> createMarkerByPort([FromBody] PortMarker portMarker)
    {
      
        await _portService.CreateAsync(portMarker);

        return Created("Port created successfully", portMarker);
    }

    [HttpDelete("markers/ports/{id}")]
    public async Task<ActionResult> deleteMarkerByPort(int id)
    {
        var marker = await _portService.GetByIdAsync(id);

        await _portService.DeleteAsync(marker);
        return Ok("Port removed successfully");
    }
}