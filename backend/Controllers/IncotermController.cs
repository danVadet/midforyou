using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[Controller]
public class IncotermController : ControllerBase
{
    private readonly ApplicationDbContext _applicationDbContext;
    public IncotermController(ApplicationDbContext applicationDbContext)
    {
        _applicationDbContext = applicationDbContext;

    }

    [HttpGet("incoterms")]
    public async Task<ActionResult> getAllIncoterms()
    {
        var incoterms = await _applicationDbContext.Incoterms.ToListAsync();
        return Ok(incoterms);
    }

    [HttpGet("incoterms/{id}")]
    public async Task<ActionResult> getIncoterm(int id)
    {
        var incoterm = await _applicationDbContext.Incoterms.FindAsync(id);
        return Ok(incoterm);
    }
    [HttpPost("incoterms/addIncoterm")]
    public async Task<ActionResult> addIncoterm([FromBody] Incoterm incoterm)
    {
     
        _applicationDbContext.Incoterms.Add(incoterm);

        await _applicationDbContext.SaveChangesAsync();

        return Created("Incoterm created successfully", incoterm);
    }
}