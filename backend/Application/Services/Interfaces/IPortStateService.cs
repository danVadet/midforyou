
public interface IPortStateService
{

    Task CreateAsync(CreatePortStateRequest createPortStateRequest);
    Task<List<PortStateResponse>> GetAllAsync();
    Task<PortStateResponse> GetByIdAsync(int id);
    

}