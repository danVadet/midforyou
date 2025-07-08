using Microsoft.AspNetCore.Mvc;
namespace backend.Controllers;


[Controller]
public class PortStateController : ControllerBase
{
    private readonly IPortStateService _portStateService;
    public PortStateController(IPortStateService portStateService)
    {
        _portStateService = portStateService;

    }

    [HttpGet("states")]
    public async Task<ActionResult> getAllStates()
    {

        List <PortStateResponse> portStates = await  _portStateService.GetAllAsync();
        return Ok(portStates);
    }

    [HttpGet("states/{id}")]
    public async Task<ActionResult> getStateById(int id)
    {
        PortStateResponse portState = await _portStateService.GetByIdAsync(id);
        return Ok(portState);
    }
    [HttpPost("states/addState")]
    public async Task<ActionResult> addState([FromBody] CreatePortStateRequest createPortStateRequest)
    {

       await _portStateService.CreateAsync(createPortStateRequest);
        return Created("Port state created successfully", createPortStateRequest);

    }
}