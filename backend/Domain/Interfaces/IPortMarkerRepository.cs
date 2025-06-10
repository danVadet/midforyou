
using backend.Domain;

public interface IPortMarkerRepository
{

    Task<PortMarker> CreateAsync(PortMarker portMarker);
    Task<List<PortMarker>> GetAllAsync();
    Task<PortMarker> GetByIdAsync(int id);

    
} 