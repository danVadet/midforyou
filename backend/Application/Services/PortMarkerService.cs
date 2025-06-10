
using AutoMapper;

public class PortMarkerService : IPortMarkerService
{
    private readonly IPortMarkerRepository _portMarkerRepository;
    private readonly IMapper _mapper;

    public Task CreateAsync(CreatePortMarkerRequest createPortMarkerRequest)
    {
        throw new NotImplementedException();
    }

    public Task<List<PortMarkerResponse>> GetAllAsync()
    {
        throw new NotImplementedException();
    }

    public Task<PortMarkerResponse> GetByIdAsync(int id)
    {
        throw new NotImplementedException();
    }
} 