
namespace backend.Repositories;


using backend.Models;

public interface IPortService {

    public Task CreateAsync (PortMarkerRequest portMarkerRequest);
    public Task<List<PortMarkerResponse>> GetAllAsync();
    public Task<List<PortMarkerResponse>> GetAllPortsByState();
    public Task<List<PortMarkerResponse>> GetAllPortsById(int id);

     public Task<int> GetAllPortsByAir();
    public Task<int> GetAllPortsBySea();

    public Task<int> GetAllPortsAirByState(int stateId);
    public Task<int> GetAllPortsSeaByState(int stateId);

    public Task<List<PortMarkerResponse>> GetPortByState(int stateId);

    public Task<PortMarkerResponse> GetByIdAsync(int id);

}