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
    public async Task<ActionResult<List<StateMarker>>> getAllMarkerByState()
    {
        var markers = await _applicationDbContext.StateMarkers.ToListAsync();
        return Ok(markers);
    }
      [HttpGet("markers/state/{id}")]
    public async Task<ActionResult> getMarker(int id)
    {

        var marker = await _applicationDbContext.StateMarkers.FindAsync(id);

        return Ok(marker);
      

    
    }
    [HttpPost("markers/state")]
    public async Task<ActionResult> createMarkerByState([FromBody] StateMarker marker)
    {
    
        _applicationDbContext.StateMarkers.Add(marker);

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
    [HttpDelete("markersPorts")]
    public async Task<ActionResult> deleteAllProducts()
    {
       foreach(var product in _applicationDbContext.PortMarkers) {

        _applicationDbContext.Remove(product);

       }
        await _applicationDbContext.SaveChangesAsync();
        return Ok("All products removed successfully");
    }

    [HttpDelete("markers/port/{id}")]
    public async Task<ActionResult> deleteMarkerByPort(int id)
    {
        var marker = await _applicationDbContext.PortMarkers.FindAsync(id);

        _applicationDbContext.PortMarkers.Remove(marker);
        await _applicationDbContext.SaveChangesAsync();
        return Ok("Container removed successfully");
    }
    [HttpGet("markers/ports/{id}")]
    public async Task<ActionResult> getPortById(int id)
    {

        var marker = await _applicationDbContext.PortMarkers.FindAsync(id);
        return Ok(marker);
      

    
    }
}