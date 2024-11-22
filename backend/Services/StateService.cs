using System.Collections.Generic;
using System.Threading.Tasks;
using backend.Models;
using backend.Repositories;
using Microsoft.EntityFrameworkCore;

public class StateService : IStateService
{
    private readonly IStateRepository _stateRepository;
    public StateService(IStateRepository stateRepository)
    {
        _stateRepository = stateRepository;

    }
    public async Task CreateAsync(State state)
    {
       
        await _stateRepository.CreateAsync(state);
    }

  

     public async Task <State> GetByIdAsync(int id)
    {

    State state = await _stateRepository.GetByIdAsync(id);
    return state;
    }

    public async Task UpdateAsync(State state)
    {
        await _stateRepository.UpdateAsync(state);
    }
       public async Task DeleteAsync(State state)
    {
        await _stateRepository.DeleteAsync(state);
    }

    public async Task <List<State>> GetAllAsync()
    {

        List <State> states = await _stateRepository.GetAllAsync();
        return states;
    }
}