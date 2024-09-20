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
    
    [HttpDelete("incoterms/{id}")]
    public async Task<ActionResult> deleteIncoterm(int id)
    {
        var incoterm = await _applicationDbContext.Incoterms.FindAsync(id);

        if (incoterm == null)
        {
            return NotFound("Incoterm not found");

        }
        _applicationDbContext.Incoterms.Remove(incoterm);
        await _applicationDbContext.SaveChangesAsync();
        return Ok("Incoterm removed successfully");

   }
   [HttpPut("incoterms/{id}")]

    public async Task<ActionResult> updateIncoterm(int id, [FromBody] Incoterm incoterm)
    {
        var incotermCurrent = await _applicationDbContext.Incoterms.FindAsync(id);

        if (incotermCurrent == null)
        {
            return NotFound();

        }
     
        incotermCurrent.modal = incoterm.modal;
   

       _applicationDbContext.Incoterms.Update(incotermCurrent);
        await _applicationDbContext.SaveChangesAsync();
        return Ok("Incoterm updated successfully");
    }
}