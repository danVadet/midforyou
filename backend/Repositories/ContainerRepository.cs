
namespace backend.Repositories;

using System.Collections.Generic;
using AutoMapper;
using backend.Models;
using Microsoft.EntityFrameworkCore;

public class ContainerRepository : IContainerRepository
{

    private readonly ApplicationDbContext _applicationDbContext;
    
    public ContainerRepository(ApplicationDbContext applicationDbContext)
    {
        _applicationDbContext = applicationDbContext;

    }

    public async Task<Container> CreateAsync(Container container)
    {
        
        _applicationDbContext.Containers.Add(container);
        await _applicationDbContext.SaveChangesAsync();
        return container;
    }

    public async Task<List<Container>> GetAllAsync()
    {
         List <Container> containers = await _applicationDbContext.Containers.ToListAsync();
        return containers;     
    }

    public async Task<Container> GetByIdAsync(int id)
    {
        Container container = await _applicationDbContext.Containers.FindAsync(id);
        return container;


    }
}