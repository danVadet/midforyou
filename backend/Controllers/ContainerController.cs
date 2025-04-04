using backend.Data;
using backend.Models;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


[Controller]
public class ContainerController : ControllerBase
{
    private readonly AppDbContext _appDbContext;
    private readonly IHostEnvironment _hostEnvironment;
    public ContainerController(AppDbContext appDbContext, IHostEnvironment hostEnvironment)
    {
        _appDbContext = appDbContext;
        _hostEnvironment = hostEnvironment;
    }

    [HttpGet("containers")]
    public async Task<ActionResult> getAllContainers()
    {

        var containers = await _appDbContext.Containers.ToListAsync();
        return Ok(containers);
    }
 
    [HttpPost("containers/createContainer")]
    public async Task<ActionResult> createContainer(Container container, IFormFile pic)
    {

        List <Product> products = await _appDbContext.Products.ToListAsync();

        var uploadImage = Path.Combine(_hostEnvironment.ContentRootPath, $"Images/Containers", pic.FileName);
        using (var stream = new FileStream(uploadImage, FileMode.Create)) {
            await pic.CopyToAsync(stream);
        }

        container.image = $"{HttpContext.Request.Scheme}://{HttpContext.Request.Host}/Images/Containers/{pic.FileName}";
        container.capacityWeight = container.capacityWeight * 1000;
        container.products = products;
     
        _appDbContext.Containers.Add(container);
        await _appDbContext.SaveChangesAsync();

        return Created("Product created successfully", container);
    }

    [HttpGet("containers/capacity/{id}")]
    public async Task<ActionResult> capacityWeightContainer(int id)
    {

        Container container = await _appDbContext.Containers.FindAsync(id);
        List <Product> products = await _appDbContext.Products.ToListAsync();

        var sumWeightTotal = products.Sum(product => product.weightTotal);
        var sumVolumeTotal =    products.Sum(product => product.volumeTotal);

        var pctWeight =  Convert.ToInt64(sumWeightTotal / container.capacityWeight * 100);
        var pctVolume = Convert.ToInt64( sumVolumeTotal / container.capacityVolume * 100);

        container.products = products;

        if(sumWeightTotal <= container.capacityWeight && sumVolumeTotal <= container.capacityVolume) {
          
            return Ok( new { container, pctWeight, pctVolume });

        } else {
            return Ok(new { container});
        }
    }
}