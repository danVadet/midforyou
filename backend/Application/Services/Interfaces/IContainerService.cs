

public interface IContainerService
{

    Task CreateAsync(CreateContainerRequest createContainerRequest);
    Task<List<ContainerResponse>> GetAllAsync();

    Task<ContainerResponse> GetByIdAsync(int id);

    Task<object> verifityCapacityAsync(int id);




}