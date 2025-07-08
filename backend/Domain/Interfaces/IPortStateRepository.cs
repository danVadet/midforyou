

using backend.Domain;

public interface IPortStateRepository
{

    Task<PortState> CreateAsync(PortState portState);
    Task<List<PortState>> GetAllAsync();
    Task<PortState> GetByIdAsync(int id);


    
}