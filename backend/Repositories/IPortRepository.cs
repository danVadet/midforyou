namespace backend.Repositories;
using backend.Models;

public interface IPortRepository {

    public Task CreateAsync (PortMarker portMarker);
    public Task<List<PortMarker>> GetAllAsync();
    public Task<List<PortMarker>> GetAllPortsByState();
    public Task<List<PortMarker>> GetAllPortsById(int id);
    public Task<List<PortMarker>> GetPortByState(int stateId);
    
    public Task<PortMarker> GetByIdAsync(int id);
    public Task UpdateAsync (PortMarker portMarker);
    public Task DeleteAsync (PortMarker portMarker);


}