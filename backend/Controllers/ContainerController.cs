
using backend.Models;
using backend.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers;


[Controller]
public class ContainerController : ControllerBase
{

    private readonly IContainerService _conatinerService;
     private readonly ApplicationDbContext _applicationDbContext;

    private readonly IProductService _productService;

    public ContainerController(IContainerService containerService, IProductService productService, ApplicationDbContext applicationDbContext)
    {

        _conatinerService = containerService;
        _productService = productService;
        _applicationDbContext = applicationDbContext;

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
    public async Task<ActionResult> getProductById(int id)
    {
        ContainerResponse  containerResponse = await _conatinerService.GetByIdAsync(id);
       return Ok(containerResponse);
    }

    [HttpGet("containers/capacity/{id}")]
    public async Task<ActionResult> verfiqueCapacityProduct(int id)
    {

        Container container = await _applicationDbContext.Containers.FindAsync(id);
         List <Product> products = await  _applicationDbContext.Products.ToListAsync();

        container.products = products;

        _applicationDbContext.Containers.Add(container);

        var sumVolumeTotal = products.Sum(product => product.volumeTotal);
        var sumPesoTotal = products.Sum(product => product.pesoTotal);

        var pctVolume = sumVolumeTotal/container.capacidadeVolume * 100;
        var pctPeso = sumPesoTotal/container.capacidadePeso * 100;



        if (sumPesoTotal <= container.capacidadePeso && sumVolumeTotal <= container.capacidadeVolume)
        {
            return Ok(String.Format("{0:f0}", pctVolume));

        }
        else
        {
            return Ok("Esse tipo de contêiner não cabe");
        }
    }
    [HttpGet("containers/capacityPeso/{id}")]
    public async Task<ActionResult> verfiqueCapacityPesoProduct(int id)
    {

        Container container = await _applicationDbContext.Containers.FindAsync(id);
         List <Product> products = await  _applicationDbContext.Products.ToListAsync();

        var sumVolumeTotal = products.Sum(product => product.volumeTotal);
        var sumPesoTotal = products.Sum(product => product.pesoTotal);

        var pctPeso = sumPesoTotal/container.capacidadePeso * 100;



        if (sumPesoTotal <= container.capacidadePeso && sumVolumeTotal <= container.capacidadeVolume)
        {
            return Ok(String.Format("{0:f0}", pctPeso));

        }
        else
        {
            return Ok("Esse tipo de contêiner não cabe");
        }
    }
}