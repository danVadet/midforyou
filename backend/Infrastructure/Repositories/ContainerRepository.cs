

using backend.Infrastructure;
using backend.Models;
using Microsoft.EntityFrameworkCore;

public class ContainerRepository : IContainerRepository
{

    private readonly AppDbContext _appDbContext;

    public ContainerRepository(AppDbContext appDbContext)
    {
        _appDbContext = appDbContext;
    }
    public async Task<Container> CreateAsync(Container container)
    {
       
        _appDbContext.Containers.Add(container);
        await _appDbContext.SaveChangesAsync();
        return container;
    }

    public async Task<List<Container>> GetAllAsync()
    {
        List<Container> containers = await _appDbContext.Containers.Include(p => p.products).ToListAsync();
        return containers;
    }

    public async Task<Container> GetByIdAsync(int id)
    {
        Container container = await _appDbContext.Containers.FindAsync(id);
        return container;

    }
}