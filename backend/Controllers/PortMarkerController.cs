using backend.Domain;
using backend.Infrastructure;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers;

[Controller]
public class  PortsMarkersController : ControllerBase
{
    private readonly AppDbContext _appDbContext;
    private readonly IWebHostEnvironment _webHostEnviroment;

    public PortsMarkersController(AppDbContext appDbContext, IWebHostEnvironment webHostEnvironment)
    {
        _appDbContext = appDbContext;
        _webHostEnviroment = webHostEnvironment;

    }

    [HttpGet("markers")]
    public async Task<ActionResult> getAllPorts()
    {

        var portMarkers = await _appDbContext.PortMarkers.Include( portMarkers=> portMarkers.portState).ToListAsync();
        return Ok(portMarkers);

    }

    [HttpGet("markers/state/{portStateId}")]
    public async Task<ActionResult> getAllPortsByState(int portStateId)
    
    {

        var portMarkers = await _appDbContext.PortMarkers.Include( portMarkers=> portMarkers.portState).Where(portMarker => portMarker.portStateId == portStateId).ToListAsync();;
        return Ok(portMarkers);
    }

    [HttpGet("markers/air")]
    public async Task<ActionResult> getAllAirPorts()
    
    {
        var portMarkers = await _appDbContext.PortMarkers.Include( portMarkers=> portMarkers.portState).Where(portMarker => portMarker.portType.Equals(PortType.AIR)).ToListAsync();;
        return Ok(portMarkers.Count());
    }

    [HttpGet("markers/water")]
    public async Task<ActionResult> getAllWaterPorts()
    
    {
        var portMarkers = await _appDbContext.PortMarkers.Include( portMarkers=> portMarkers.portState).Where(portMarker => portMarker.portType.Equals(PortType.WATER)).ToListAsync();;
        return Ok(portMarkers.Count());
    }

    [HttpGet("markers/air/state/{stateId}")]
    public async Task<ActionResult> getAllAirPortsByState(int stateId)
    
    {

        var portMarkers = await _appDbContext.PortMarkers.Include( portMarkers=> portMarkers.portState).Where(portMarker => portMarker.portType.Equals(PortType.AIR) && portMarker.portStateId == stateId).ToListAsync();;
        return Ok(portMarkers.Count());
    
    }

    [HttpGet("markers/water/state/{stateId}")]
    public async Task<ActionResult> getAllWaterPortsByState(int stateId)
    
    {

        var portMarkers = await _appDbContext.PortMarkers.Include( portMarkers=> portMarkers.portState).Where(portMarker => portMarker.portType.Equals(PortType.WATER) && portMarker.portStateId == stateId).ToListAsync();;
        return Ok(portMarkers.Count());
    }

    [HttpGet("markers/{id}")]
    public async Task<ActionResult> getProduct(int id)
    {
        var portMarker = await _appDbContext.PortMarkers.FindAsync(id);
        return Ok(portMarker);
    }
    [HttpPost("markers/addPort")]
    public async Task<ActionResult> addPortMarker(PortMarker portMarker, IFormFile pic)
    {

        PortState portState = await _appDbContext.PortState.FindAsync(portMarker.portStateId);
        portMarker.portState = portState;
        var uploadImage = Path.Combine(_webHostEnviroment.WebRootPath, $"Images/PortMarkers/{portState.label}", pic.FileName);
        using (var stream = new FileStream(uploadImage, FileMode.Create)) {
            await pic.CopyToAsync(stream);
        }

        portMarker.image = $"{HttpContext.Request.Scheme}://{HttpContext.Request.Host}/Images/PortMarkers/{portState.label}/{pic.FileName}";

        _appDbContext.PortMarkers.Add(portMarker);
        await _appDbContext.SaveChangesAsync();

        return Created("Port created successfully", portMarker);
    }
    [HttpDelete("markers/{id}")]
    public async Task<ActionResult> deletePort(int id)
    {
        PortMarker portMarker = await _appDbContext.PortMarkers.FindAsync(id);
        _appDbContext.PortMarkers.Remove(portMarker);
        await _appDbContext.SaveChangesAsync();
        return Ok(portMarker);
    }
}