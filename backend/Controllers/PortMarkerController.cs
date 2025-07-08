using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;

[Controller]
public class  PortsMarkersController : ControllerBase
{
    private readonly IPortMarkerService _portMarkerService;

    public PortsMarkersController(IPortMarkerService portMarkerService)
    {
        _portMarkerService = portMarkerService;

    }

    [HttpGet("markers")]
    public async Task<ActionResult> getAllPorts()
    {

        List<PortMarkerResponse> portMarkers = await _portMarkerService.GetAllAsync();
        return Ok(portMarkers);

    }

    [HttpGet("markers/state/{portStateId}")]
    public async Task<ActionResult> getAllPortsByState(int portStateId)
    
    {
        List<PortMarkerResponse> portMarkers = await _portMarkerService.GetAllPortsByStateAsync(portStateId);
        return Ok(portMarkers);
    }

    [HttpGet("markers/air")]
    public async Task<ActionResult> getAllAirPorts()
    
    {
        List<PortMarkerResponse> portMarkers = await _portMarkerService.GetAllByAirAsync();
        return Ok(portMarkers.Count());
    }

    [HttpGet("markers/water")]
    public async Task<ActionResult> getAllWaterPorts()
    
    {
         List<PortMarkerResponse> portMarkers = await _portMarkerService.GetAllByWaterAsync();
        return Ok(portMarkers.Count());
    }

    [HttpGet("markers/air/state/{portStateId}")]
    public async Task<ActionResult> getAllAirPortsByState(int portStateId)

    {

        List<PortMarkerResponse> portMarkers = await _portMarkerService.GetAllAirPortsByStateAsync(portStateId);
        return Ok(portMarkers.Count());
    
    }

    [HttpGet("markers/water/state/{portStateId}")]
    public async Task<ActionResult> getAllWaterPortsByState(int portStateId)
    
    {

        List<PortMarkerResponse> portMarkers = await _portMarkerService.GetAllWaterPortsByStateAsync(portStateId);
        return Ok(portMarkers.Count());  
    }

    [HttpGet("markers/{id}")]
    public async Task<ActionResult> getProduct(int id)
    {
        PortMarkerResponse portMarker = await _portMarkerService.GetByIdAsync(id);
        return Ok(portMarker);
    }
    [HttpPost("markers/addPort")]
    public async Task<ActionResult> addPortMarker(CreatePortMarkerRequest createPortMarkerRequest)
    {
      
       await _portMarkerService.CreateAsync(createPortMarkerRequest);
        return Created("Port created successfully", createPortMarkerRequest);
    }
    [HttpDelete("markers/{id}")]
    public async Task<ActionResult> deletePort(int id)
    {
        PortMarkerResponse portMarker = await _portMarkerService.DeleteAsync(id);
        return Ok(portMarker);
    }
}