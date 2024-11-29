namespace backend.Repositories;
using backend.Models;

public interface IStateRepository {

    public Task <State> CreateAsync (State state);
    public Task<List<State>> GetAllAsync();
    public Task<State> GetByIdAsync(int id);
}