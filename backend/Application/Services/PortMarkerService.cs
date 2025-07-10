using AutoMapper;
using backend.Domain;

public class PortMarkerService : IPortMarkerService
{
    private readonly IPortMarkerRepository _portMarkerRepository;
    private readonly IPortStateRepository _portStateRepository;
    private readonly IWebHostEnvironment _webHostEnviroment;
    private readonly IHttpContextAccessor _httpContextAccessor;
    private readonly IMapper _mapper;


    public PortMarkerService(IPortMarkerRepository portMarkerRepository, IPortStateRepository portStateRepository, IWebHostEnvironment webHostEnvironment, IHttpContextAccessor httpContextAccessor, IMapper mapper)
    {
        _portMarkerRepository = portMarkerRepository;
        _portStateRepository = portStateRepository; 
        _webHostEnviroment = webHostEnvironment;
        _httpContextAccessor = httpContextAccessor;
        _mapper = mapper;
    }

    public async Task CreateAsync(CreatePortMarkerRequest createPortMarkerRequest)
    {

        PortState portState = await _portStateRepository.GetByIdAsync(createPortMarkerRequest.portStateId);
        createPortMarkerRequest.portState = portState;

        var uploadImage = Path.Combine(_webHostEnviroment.WebRootPath, $"Images/PortMarkers/{createPortMarkerRequest.portState.label}", createPortMarkerRequest.pic.FileName);
        using (var stream = new FileStream(uploadImage, FileMode.Create))
        {
            await createPortMarkerRequest.pic.CopyToAsync(stream);
        }

        // createPortMarkerRequest.image = $"{_httpContextAccessor.HttpContext.Request.Scheme}://{_httpContextAccessor.HttpContext.Request.Host}/Images/PortMarkers/{createPortMarkerRequest.pic.FileName}";
        createPortMarkerRequest.image = $"Images/PortMarkers/{createPortMarkerRequest.portState.label}/{createPortMarkerRequest.pic.FileName}";
        
      var portMarker = _mapper.Map<PortMarker>(createPortMarkerRequest);
      await _portMarkerRepository.CreateAsync(portMarker);

    }

    public async Task<PortMarkerResponse> DeleteAsync(int id)
    {
        PortMarker portMarkerEntity = await _portMarkerRepository.DeleteAsync(id);
        return _mapper.Map<PortMarkerResponse>(portMarkerEntity);   

    }

    public async Task<List<PortMarkerResponse>> GetAllAirPortsByStateAsync(int stateId)
    {

        List<PortMarker> portMarkers = await _portMarkerRepository.GetAllAirPortsByStateAsync(stateId);
        return _mapper.Map<List<PortMarkerResponse>>(portMarkers);
        
    }

    public async Task<List<PortMarkerResponse>> GetAllAsync()
    {

        List<PortMarker> portMarkers = await _portMarkerRepository.GetAllAsync();
        return _mapper.Map<List<PortMarkerResponse>>(portMarkers);
    }

    public async Task<List<PortMarkerResponse>> GetAllByAirAsync()
    {
        List<PortMarker> portMarkers = await _portMarkerRepository.GetAllByAirAsync();
        return _mapper.Map<List<PortMarkerResponse>>(portMarkers);
    }

    public async Task<List<PortMarkerResponse>> GetAllByWaterAsync()
    {
        List<PortMarker> portMarkers = await _portMarkerRepository.GetAllByWaterAsync();
        return _mapper.Map<List<PortMarkerResponse>>(portMarkers);
    }

    public async Task<List<PortMarkerResponse>> GetAllPortsByStateAsync(int portStateId)
    {
        List<PortMarker> portMarkers = await _portMarkerRepository.GetAllPortsByStateAsync(portStateId);
        return _mapper.Map<List<PortMarkerResponse>>(portMarkers);
    }

    public async Task<List<PortMarkerResponse>> GetAllWaterPortsByStateAsync(int stateId)
    {

        List<PortMarker> portMarkers = await _portMarkerRepository.GetAllWaterPortsByStateAsync(stateId);
        return _mapper.Map<List<PortMarkerResponse>>(portMarkers);
    }

    public async Task<PortMarkerResponse> GetByIdAsync(int id)
    {
        PortMarker portMarkerEntity = await _portMarkerRepository.GetByIdAsync(id);
        return _mapper.Map<PortMarkerResponse>(portMarkerEntity); 
    }
} 