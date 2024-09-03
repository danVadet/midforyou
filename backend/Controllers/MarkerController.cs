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
    public async Task<ActionResult<List<Marker>>> getAllMarkerByState()
    {
        var markers = await _applicationDbContext.Markers.ToListAsync();
        return Ok(markers);
    }
      [HttpGet("markers/states/{id}")]
    public async Task<ActionResult> getMarker(int id)
    {

        var marker = await _applicationDbContext.Markers.FindAsync(id);

        return Ok(marker);
      

    
    }
    [HttpPost("markers/state")]
    public async Task<ActionResult> createMarkerByState([FromBody] Marker marker)
    {
    
        _applicationDbContext.Markers.Add(marker);

        await _applicationDbContext.SaveChangesAsync();

        return Created("Marker by state created successfully", marker);
    }

    
    [HttpGet("markers/ports")]
    public async Task<ActionResult<List<PortMarker>>> getAllMarkerByPort([FromQuery] string search)
    {
        var markers = await _applicationDbContext.PortMarkers.Include(p => p.marker).ToListAsync();

        if(!string.IsNullOrEmpty(search)) {
            markers = markers.Where(m => m.label.Contains(search)).ToList();
            return Ok(markers);

        } else {
        return Ok(markers);
        }
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

    [HttpDelete("markers/ports/{id}")]
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