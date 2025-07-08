

using backend.Domain;

public interface IPortMarkerRepository
{

    Task<PortMarker> CreateAsync(PortMarker portMarker);
    Task<List<PortMarker>> GetAllAsync();
    Task<List<PortMarker>> GetAllByWaterAsync();
    Task<List<PortMarker>> GetAllByAirAsync();
    Task<List<PortMarker>> GetAllPortsByStateAsync(int portStateId);
    Task<List<PortMarker>> GetAllWaterPortsByStateAsync(int portStateId);
    Task<List<PortMarker>> GetAllAirPortsByStateAsync(int portStateId);
    Task<PortMarker> GetByIdAsync(int id);
    Task<PortMarker> DeleteAsync(int id);
} 