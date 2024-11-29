
namespace backend.Repositories;

using backend.Models;

public interface IContainerRepository {

    public Task <Container> CreateAsync (Container container);
    public Task<List<Container>> GetAllAsync();
    public Task<Container> GetByIdAsync(int id);

}