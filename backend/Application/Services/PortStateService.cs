
using AutoMapper;

public class PortStateService : IPortStateService
{
    private readonly IPortStateRepository _portStateRepository;
    private readonly IMapper _mapper;

    public Task CreateAsync(CreatePortStateRequest createPortStateRequest)
    {
        throw new NotImplementedException();
    }

    public Task<List<PortStateResponse>> GetAllAsync()
    {
        throw new NotImplementedException();
    }

    public Task<PortStateResponse> GetByIdAsync(int id)
    {
        throw new NotImplementedException();
    }
} 