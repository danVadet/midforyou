
namespace backend.Services;

using backend.Models;

public interface IContainerService {

    public Task CreateAsync (ContainerRequest containerRequest);
    public Task<List<ContainerResponse>> GetAllAsync();
    public Task<ContainerResponse> GetByIdAsync(int id);
}