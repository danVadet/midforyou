

namespace backend.Repositories;

using System.Collections.Generic;
using System.Threading.Tasks;
using backend.Models;
using backend.Repositories;
using Microsoft.EntityFrameworkCore;

public class StateRepository : IStateRepository
{
    private readonly ApplicationDbContext _applicationDbContext;
    public StateRepository(ApplicationDbContext applicationDbContext)
    {
        _applicationDbContext = applicationDbContext;

    }
    public async Task<State> CreateAsync(State state)
    {
       
        _applicationDbContext.States.Add(state);
        await _applicationDbContext.SaveChangesAsync();
        return state;
    }
     public async Task <State> GetByIdAsync(int id)
    {

    State state = await _applicationDbContext.States.FindAsync(id);
    return state;
    }

    public async Task <List<State>> GetAllAsync()
    {

        List <State> states  = await _applicationDbContext.States.ToListAsync();
        return states;
    }
}
