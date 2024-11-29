
using backend.Models;
using backend.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers;


[Controller]
public class ContainerController : ControllerBase
{

    private readonly IContainerService _conatinerService;
    private readonly IProductService _productService;

    public ContainerController(IContainerService containerService, IProductService productService)
    {

        _conatinerService = containerService;
        _productService = productService;

    }

    [HttpGet("containers")]
    public async Task<ActionResult<List<ContainerResponse>>> getAllContainer()
    {
        List <ContainerResponse> containers = await _conatinerService.GetAllAsync();
        return Ok(containers);
    }
    [HttpPost("containers/createContainer")]
    public async Task<ActionResult> createContainer( [FromForm] ContainerRequest containerRequest, IFormFile pic) {
      
        string FilePath = Path.Combine(Directory.GetCurrentDirectory(), "Images", pic.FileName);
        pic.CopyTo(new FileStream(FilePath, FileMode.Create));
         
        containerRequest.image = $"{HttpContext.Request.Scheme}://{HttpContext.Request.Host}/Images/{pic.FileName}";
        containerRequest.capacidadePeso =  containerRequest.capacidadePeso * 1000;
    
        await _conatinerService.CreateAsync(containerRequest);

        return Created("Container created successfully", containerRequest);
    }
     [HttpGet("containers/{id}")]
    public async Task<ActionResult<ContainerResponse>> getContainerById (int id)
    {

        ContainerResponse container = await _conatinerService.GetByIdAsync(id);
        return Ok(container);
    }
   

    [HttpGet("containers/capacity/{id}")]
    public async Task<ActionResult> verfiqueCapacityProduct(int id)
    {

        var container = await  _conatinerService.GetByIdAsync(id);
        var products = await _productService.GetAllAsync();

        var sumVolumeTotal = products.Sum(product => product.volumeTotal);
        var sumPesoTotal = products.Sum(product => product.pesoTotal);


        if (sumPesoTotal <= container.capacidadePeso && sumVolumeTotal <= container.capacidadeVolume)
        {
            return Ok(container);

        }
        else
        {
            return Ok("Esse tipo de contêiner não cabe");
        }
    }
}