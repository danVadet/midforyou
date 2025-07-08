
public interface IPortMarkerService
{
    Task CreateAsync(CreatePortMarkerRequest createPortMarkerRequest);
    Task<List<PortMarkerResponse>> GetAllAsync();

    Task<List<PortMarkerResponse>> GetAllByWaterAsync();
    Task<List<PortMarkerResponse>> GetAllByAirAsync();
    Task<List<PortMarkerResponse>> GetAllPortsByStateAsync(int portStateId);
    Task<List<PortMarkerResponse>> GetAllWaterPortsByStateAsync(int stateId);
    Task<List<PortMarkerResponse>> GetAllAirPortsByStateAsync(int stateId);
    Task<PortMarkerResponse> GetByIdAsync(int id);
    Task<PortMarkerResponse> DeleteAsync(int id);

}