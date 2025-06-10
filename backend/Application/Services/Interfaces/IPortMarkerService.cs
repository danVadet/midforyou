

public interface IPortMarkerService
{
    Task CreateAsync(CreatePortMarkerRequest createPortMarkerRequest);
    Task<List<PortMarkerResponse>> GetAllAsync();
    Task<PortMarkerResponse> GetByIdAsync(int id);
    
}