namespace backend.Repositories;
using backend.Models;

public interface IStateService {

    public Task CreateAsync (StateRequest stateRequest);
    public Task<List<StateResponse>> GetAllAsync();
    public Task<StateResponse> GetByIdAsync(int id);

}