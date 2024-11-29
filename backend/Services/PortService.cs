using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using backend.Models;
using backend.Repositories;
using Microsoft.EntityFrameworkCore;

public class PortService : IPortService
{
    private readonly IPortRepository _portRepository;
    private readonly IMapper _mapper;

    public PortService(IPortRepository portRepository, IMapper mapper)
    {
        _portRepository = portRepository;
        _mapper = mapper;

    }
    public async Task CreateAsync(PortMarkerRequest portMarkerRequest)
    {
        PortMarker portMarker = _mapper.Map<PortMarker>(portMarkerRequest);
        await _portRepository.CreateAsync(portMarker);
    }
     public async Task <PortMarkerResponse> GetByIdAsync(int id)
    {

    PortMarker portMarker = await _portRepository.GetByIdAsync(id);
    return _mapper.Map<PortMarkerResponse>(portMarker);

    }

    public async Task <List<PortMarkerResponse>> GetAllAsync()
    {

        List <PortMarker> portMarkers = await _portRepository.GetAllAsync();
        return _mapper.Map<List <PortMarkerResponse>>(portMarkers);
    }

    public async Task<List<PortMarkerResponse>> GetAllPortsByState()
    {
     List <PortMarker> portMarkers = await _portRepository.GetAllPortsByState();
        return _mapper.Map<List <PortMarkerResponse>>(portMarkers);
    }
       public async Task<List<PortMarkerResponse>> GetAllPortsById(int id)
    {

      var markers = await _portRepository.GetAllPortsById(id);

        return _mapper.Map<List <PortMarkerResponse>>(markers);
        
    }

    public async Task<List<PortMarkerResponse>> GetPortByState(int stateId)
    {
            var markers = await _portRepository.GetPortByState(stateId);

            return _mapper.Map<List <PortMarkerResponse>>(markers);


    }

    public Task<int> GetAllPortsByAir()
    {
            return _portRepository.GetAllPortsByAir();
    }

    public Task<int> GetAllPortsBySea()
    {
        return _portRepository.GetAllPortsBySea();
    }
    
    public Task<int> GetAllPortsAirByState(int stateId) 
    {
        return _portRepository.GetAllPortsAirByState(stateId);
    }
    public Task<int> GetAllPortsSeaByState(int stateId) 

    {
        return _portRepository.GetAllPortsSeaByState(stateId);
    }
}