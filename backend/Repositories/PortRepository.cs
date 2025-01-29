namespace backend.Repositories;


using System.Collections.Generic;
using System.Threading.Tasks;
using backend.Models;
using backend.Repositories;
using Microsoft.EntityFrameworkCore;

public class PortRepository : IPortRepository
{
    private readonly ApplicationDbContext _applicationDbContext;
    public PortRepository(ApplicationDbContext applicationDbContext)
    {
        _applicationDbContext = applicationDbContext;

    }
    public async Task <PortMarker> CreateAsync(PortMarker portMarker)
    {
       
        _applicationDbContext.PortMarkers.Add(portMarker);
        await _applicationDbContext.SaveChangesAsync();
        return portMarker;
    }

  

     public async Task <PortMarker> GetByIdAsync(int id)
    {

    PortMarker portMarker = await _applicationDbContext.PortMarkers.FindAsync(id);
    return portMarker;
    }
    public async Task <List<PortMarker>> GetAllAsync()
    {

        List <PortMarker> portMarkers = await _applicationDbContext.PortMarkers.ToListAsync();
        return portMarkers;
    }
      public async Task<List<PortMarker>> GetAllPortsById(int id)
    {

         var markers = await _applicationDbContext.PortMarkers.Where(p => p.id == id).ToListAsync();
        return markers;
        
    }

    public async Task<List<PortMarker>> GetAllPortsByState()
    {
        List <PortMarker> portMarkers =  await _applicationDbContext.PortMarkers.Include(p => p.state).ToListAsync();

      return  portMarkers;
    }

    public async Task<List<PortMarker>> GetPortByState(int stateId)
    {
             var state = await _applicationDbContext.States.FindAsync(stateId);
            var markers = await _applicationDbContext.PortMarkers.Where(p => p.stateId == state.id).ToListAsync();

      return  markers;
    }
     
    
        public async Task<int> GetAllPortsAirByState(int stateId)
    {

         var markers = await _applicationDbContext.PortMarkers.Where(p => p.portType == PortType.AIR && p.stateId == stateId).ToListAsync();
        return markers.Count();
        
    }
       public async Task<int> GetAllPortsSeaByState(int stateId)
    {

         var markers = await _applicationDbContext.PortMarkers.Where(p => p.portType == PortType.WATER && p.stateId == stateId).ToListAsync();
        return markers.Count();
        
    }

    public async Task<PortMarker> DeleteAsync(PortMarker portMarker)
    {
          _applicationDbContext.PortMarkers.Remove(portMarker);
        await _applicationDbContext.SaveChangesAsync();
       return portMarker ;

    }
}