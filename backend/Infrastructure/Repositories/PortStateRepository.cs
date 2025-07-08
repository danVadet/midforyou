using backend.Domain;
using backend.Infrastructure;
using Microsoft.EntityFrameworkCore;

public class PortStateRepository : IPortStateRepository
{

    private readonly AppDbContext _appDbContext;

    public PortStateRepository(AppDbContext appDbContext)
    {
        _appDbContext = appDbContext;
    }

    public async Task<PortState> CreateAsync(PortState portState)
    {
        _appDbContext.PortState.Add(portState);
        await _appDbContext.SaveChangesAsync();
        return portState;
    }

    public async Task<List<PortState>> GetAllAsync()
    {

        List<PortState> portStates = await _appDbContext.PortState.ToListAsync();
        return portStates;
    }

    public async Task<PortState> GetByIdAsync(int id)
    {

        PortState portState = await _appDbContext.PortState.FindAsync(id);
        return portState;
        
    }
}