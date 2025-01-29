namespace backend.Repositories;
using backend.Models;

public interface IPortRepository {

    public Task <PortMarker> CreateAsync (PortMarker portMarker);
    public Task<List<PortMarker>> GetAllAsync();
    public Task<List<PortMarker>> GetAllPortsByState();

    public Task<int> GetAllPortsAirByState(int stateId);
    public Task<int> GetAllPortsSeaByState(int stateId);

    public Task<List<PortMarker>> GetAllPortsById(int id);

    public Task<List<PortMarker>> GetPortByState(int stateId);
    
    public Task<PortMarker> GetByIdAsync(int id);
    public Task <PortMarker> DeleteAsync (PortMarker portMarker);



}