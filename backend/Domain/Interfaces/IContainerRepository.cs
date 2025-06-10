
using backend.Domain;

public interface IContainerRepository
{
        Task<Container> CreateAsync(Container container);
        Task<List<Container>> GetAllAsync();
        Task<Container> GetByIdAsync(int id);
        



    
}