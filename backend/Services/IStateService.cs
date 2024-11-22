namespace backend.Repositories;
using backend.Models;

public interface IStateService {

    public Task CreateAsync (State state);
    public Task<List<State>> GetAllAsync();
    public Task<State> GetByIdAsync(int id);
    public Task UpdateAsync (State state);
    public Task DeleteAsync (State state);

}