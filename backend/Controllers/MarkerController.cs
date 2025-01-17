using System.Reflection.Metadata;
using backend.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[Controller]
public class MarkerController : ControllerBase
{

     private readonly IStateService _stateService;
    private readonly IPortService _portService;
         private readonly ApplicationDbContext _applicationDbContext;

    public MarkerController( IStateService stateService, IPortService portService)
    {

        _portService = portService;
        _stateService = stateService;

    }

    [HttpGet("markers/states")]
    public async Task<ActionResult<List<State>>> getAllStates()
    {
        List <StateResponse> states = await _stateService.GetAllAsync();
        return Ok(states);
    }
      [HttpGet("markers/states/{id}")]
    public async Task<ActionResult> getMarker(int id)
    {

        StateResponse state = await _stateService.GetByIdAsync(id);

        return Ok(state);
      

    
    }
    [HttpPost("markers/state")]
    public async Task<ActionResult> createMarkerByState([FromBody] StateRequest stateRequest)
    {
    
        await _stateService.CreateAsync(stateRequest);
        return Created("State created successfully", stateRequest);
    }
     [HttpGet("markers/ports")]
    public async Task<ActionResult<List<PortMarker>>> getAllMarkerByPort()
    {
        var markers = await _portService.GetAllPortsByState();

      
        return Ok(markers);
        }
        
         [HttpGet("markers/ports/{stateId}/air")]
    public async Task<ActionResult<int>> getAllPortsAirByState(int stateId)
    {
        var count = await _portService.GetAllPortsAirByState(stateId);

      
        return Ok(count);
        }

         [HttpGet("markers/ports/{stateId}/sea")]
    public async Task<ActionResult<int>> getAllPortsBySea(int stateId)
    {
        var count = await _portService.GetAllPortsSeaByState(stateId);

      
        return Ok(count);
        }
        
         
    [HttpGet("markers/{stateId}/ports")]
    public async Task<ActionResult> getAllPortByState(int stateId)
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
    public async Task<ActionResult> createMarkerByPort([FromBody] PortMarkerRequest portMarkerRequest)
    {
      
        await _portService.CreateAsync(portMarkerRequest);

        return Created("Port created successfully", portMarkerRequest);
    }
}