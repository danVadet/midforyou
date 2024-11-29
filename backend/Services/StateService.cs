using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using backend.Models;
using backend.Repositories;
using Microsoft.EntityFrameworkCore;

public class StateService : IStateService
{
    private readonly IStateRepository _stateRepository;
    private readonly IMapper _mapper;
    public StateService(IStateRepository stateRepository, IMapper mapper)
    {
        _stateRepository = stateRepository;
        _mapper = mapper;

    }
    public async Task CreateAsync(StateRequest stateRequest)
    {

        State state = _mapper.Map<State>(stateRequest);
        await _stateRepository.CreateAsync(state);
    }

  

     public async Task <StateResponse> GetByIdAsync(int id)
    {

    State state = await _stateRepository.GetByIdAsync(id);
     return  _mapper.Map<StateResponse>(state);
    }

    public async Task <List<StateResponse>> GetAllAsync()
    {

        List <State> states = await _stateRepository.GetAllAsync();
        return _mapper.Map<List<StateResponse>>(states);
    }
}