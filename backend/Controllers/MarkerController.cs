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

    [HttpGet("markers/state")]
    public async Task<ActionResult<List<Marker>>> getAllMarkerByState()
    {
        var markers = await _applicationDbContext.Markers.ToListAsync();
        return Ok(markers);
    }
    [HttpPost("markers/state")]
    public async Task<ActionResult> createMarkerByState([FromBody] Marker marker)
    {
      
        marker.markerType = MarkerType.STATE;
        _applicationDbContext.Markers.Add(marker);

        await _applicationDbContext.SaveChangesAsync();

        return Created("Marker by state created successfully", marker);
    }

    
    [HttpGet("markers/port")]
    public async Task<ActionResult<List<PortMarker>>> getAllMarkerByPort()
    {
        var markers = await _applicationDbContext.PortMarkers.Include(p => p.marker).ToListAsync();
        return Ok(markers);
    }

    [HttpPost("markers/port")]
    public async Task<ActionResult> createMarkerByPort([FromBody] PortMarker portMarker)
    {
      
        _applicationDbContext.PortMarkers.Add(portMarker);

        await _applicationDbContext.SaveChangesAsync();

        return Created("Marker by port created successfully", portMarker);
    }

    [HttpDelete("markers/port/{id}")]
    public async Task<ActionResult> deleteMarkerByPort(int id)
    {
        var marker = await _applicationDbContext.PortMarkers.FindAsync(id);

        _applicationDbContext.PortMarkers.Remove(marker);
        await _applicationDbContext.SaveChangesAsync();
        return Ok("Container removed successfully");
    }
    [HttpGet("markers/ports/{stateId}")]
    public async Task<ActionResult> getMarker(int stateId)
    {

        var marker = await _applicationDbContext.Markers.FindAsync(stateId);
        var markers = await _applicationDbContext.PortMarkers.Include(p => p.marker).ToListAsync();

        return Ok(markers);
      

    
    }
}