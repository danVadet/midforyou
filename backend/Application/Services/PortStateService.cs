
using AutoMapper;
using backend.Domain;

public class PortStateService : IPortStateService
{
    private readonly IPortStateRepository _portStateRepository;
    private readonly IMapper _mapper;

    public PortStateService(IPortStateRepository portStateRepository, IMapper mapper)
    {
        _portStateRepository = portStateRepository;
        _mapper = mapper;
    }

    public async Task CreateAsync(CreatePortStateRequest createPortStateRequest)
    {

      var portState = _mapper.Map<PortState>(createPortStateRequest);
      await _portStateRepository.CreateAsync(portState);

    }

    public async Task<List<PortStateResponse>> GetAllAsync()
    {
        List <PortState> portStates = await _portStateRepository.GetAllAsync();
        return _mapper.Map<List<PortStateResponse>>(portStates);
    }

    public async Task<PortStateResponse> GetByIdAsync(int id)
    {

         PortState portState = await _portStateRepository.GetByIdAsync(id);
        return _mapper.Map<PortStateResponse>(portState);
    

    }
} 