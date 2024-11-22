using System.Collections.Generic;
using System.Threading.Tasks;
using backend.Models;
using backend.Repositories;
using Microsoft.EntityFrameworkCore;

public class PortService : IPortService
{
    private readonly IPortRepository _portRepository;
    public PortService(IPortRepository portRepository)
    {
        _portRepository = portRepository;

    }
    public async Task CreateAsync(PortMarker portMarker)
    {
       
        await _portRepository.CreateAsync(portMarker);
    }

  

     public async Task <PortMarker> GetByIdAsync(int id)
    {

    PortMarker portMarker = await _portRepository.GetByIdAsync(id);
    return portMarker;
    }

    public async Task UpdateAsync(PortMarker portMarker)
    {
        await _portRepository.UpdateAsync(portMarker);
    }
       public async Task DeleteAsync(PortMarker portMarker)
    {
        await _portRepository.DeleteAsync(portMarker);
    }

    public async Task <List<PortMarker>> GetAllAsync()
    {

        List <PortMarker> portMarkers = await _portRepository.GetAllAsync();
        return portMarkers;
    }

    public async Task<List<PortMarker>> GetAllPortsByState()
    {
     List <PortMarker> portMarkers = await _portRepository.GetAllPortsByState();
        return portMarkers;
    }
       public async Task<List<PortMarker>> GetAllPortsById(int id)
    {

         var markers = await _portRepository.GetAllPortsById(id);
        return markers;
        
    }

    public async Task<List<PortMarker>> GetPortByState(int stateId)
    {
            var markers = await _portRepository.GetPortByState(stateId);

      return  markers;
    }
    
}