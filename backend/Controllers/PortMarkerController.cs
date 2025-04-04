using backend.Data;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers;

[Controller]
public class  PortsMarkersController : ControllerBase
{
    private readonly AppDbContext _appDbContext;
    private readonly IHostEnvironment _hostEnvironment;
    public PortsMarkersController(AppDbContext appDbContext, IHostEnvironment hostEnvironment)
    {
        _appDbContext = appDbContext;
        _hostEnvironment = hostEnvironment;

    }

    [HttpGet("markers")]
    public async Task<ActionResult> getAllPorts()
    {

        var portMarkers = await _appDbContext.PortMarkers.Include( portMarkers=> portMarkers.state).ToListAsync();
        return Ok(portMarkers);

    }

    [HttpGet("markers/state/{stateId}")]
    public async Task<ActionResult> getAllPortsByState(int stateId)
    
    {

        var portMarkers = await _appDbContext.PortMarkers.Include( portMarkers=> portMarkers.state).Where(portMarker => portMarker.stateId == stateId).ToListAsync();;
        return Ok(portMarkers);
    }

    [HttpGet("markers/air")]
    public async Task<ActionResult> getAllAirPorts()
    
    {
        var portMarkers = await _appDbContext.PortMarkers.Include( portMarkers=> portMarkers.state).Where(portMarker => portMarker.portType.Equals(PortType.AIR)).ToListAsync();;
        return Ok(portMarkers.Count());
    }

    [HttpGet("markers/water")]
    public async Task<ActionResult> getAllWaterPorts()
    
    {
        var portMarkers = await _appDbContext.PortMarkers.Include( portMarkers=> portMarkers.state).Where(portMarker => portMarker.portType.Equals(PortType.WATER)).ToListAsync();;
        return Ok(portMarkers.Count());
    }

    [HttpGet("markers/air/state/{stateId}")]
    public async Task<ActionResult> getAllAirPortsByState(int stateId)
    
    {

        var portMarkers = await _appDbContext.PortMarkers.Include( portMarkers=> portMarkers.state).Where(portMarker => portMarker.portType.Equals(PortType.AIR) && portMarker.stateId == stateId).ToListAsync();;
        return Ok(portMarkers.Count());
    
    }

    [HttpGet("markers/water/state/{stateId}")]
    public async Task<ActionResult> getAllWaterPortsByState(int stateId)
    
    {

        var portMarkers = await _appDbContext.PortMarkers.Include( portMarkers=> portMarkers.state).Where(portMarker => portMarker.portType.Equals(PortType.WATER) && portMarker.stateId == stateId).ToListAsync();;
        return Ok(portMarkers.Count());
    }

    [HttpGet("markers/{id}")]
    public async Task<ActionResult> getProduct(int id)
    {
        var portMarker = await _appDbContext.PortMarkers.FindAsync(id);
        return Ok(portMarker);
    }
    [HttpPost("markers/addPort")]
    public async Task<ActionResult> addProduct(PortMarker portMarker, IFormFile pic)
    {

        State state = await _appDbContext.States.FindAsync(portMarker.stateId);
        portMarker.state = state;
        var uploadImage = Path.Combine(_hostEnvironment.ContentRootPath, $"Images/PortMarkers/{state.Label}", pic.FileName);
        using (var stream = new FileStream(uploadImage, FileMode.Create)) {
            await pic.CopyToAsync(stream);
        }

        portMarker.image = $"{HttpContext.Request.Scheme}://{HttpContext.Request.Host}/Images/PortMarkers/{state.Label}/{pic.FileName}";

        _appDbContext.PortMarkers.Add(portMarker);
        await _appDbContext.SaveChangesAsync();

        return Created("Port created successfully", portMarker);
    }
}