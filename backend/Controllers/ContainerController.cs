using System.ComponentModel;
using backend.Models;
using Microsoft.AspNetCore.Mvc;

[Controller]
public class ContainerController : ControllerBase
{
    private readonly IContainerService _containerService;

    public ContainerController(IContainerService containerService)
    {
        _containerService = containerService;
    }

    [HttpGet("containers")]
    public async Task<ActionResult>getAllContainers()
    {

        List <ContainerResponse> containers = await _containerService.GetAllAsync();
        return Ok(containers);
    }
 
    [HttpPost("containers/createContainer")]
    public async Task<ActionResult> createContainer(CreateContainerRequest createContainerRequest)
    {
        await _containerService.CreateAsync(createContainerRequest);
        return Created("Container created successfully", createContainerRequest);
    }

    [HttpGet("containers/{id}")]
    public async Task<ActionResult> GETContainer(int id)
    {
        ContainerResponse container = await _containerService.GetByIdAsync(id);

        return Ok(container);

    }

    
    [HttpGet("containers/capacity/{id}")]
    public async Task<ActionResult<object>> capacityWeightContainer(int id)
    {

        var verifityCapacity = await _containerService.verifityCapacityAsync(id);
        return Ok(verifityCapacity);

    }
}