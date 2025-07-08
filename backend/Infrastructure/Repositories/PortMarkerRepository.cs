using backend.Domain;
using backend.Infrastructure;
using Microsoft.EntityFrameworkCore;

public class PortMarkerRepository : IPortMarkerRepository
{

    private readonly AppDbContext _appDbContext;

    public PortMarkerRepository(AppDbContext appDbContext)
    {
        _appDbContext = appDbContext;
    }

    public async Task<PortMarker> CreateAsync(PortMarker portMarker)
    {

        _appDbContext.PortMarkers.Add(portMarker);
        await _appDbContext.SaveChangesAsync();
        return portMarker;
    }

    public async Task<PortMarker> DeleteAsync(int id)
    {

        PortMarker portMarker = await _appDbContext.PortMarkers.FindAsync(id);
        _appDbContext.PortMarkers.Remove(portMarker);
        await _appDbContext.SaveChangesAsync();
        return portMarker;
    }

    public async Task<List<PortMarker>> GetAllAirPortsByStateAsync(int stateId)
    {


        List  <PortMarker> portMarkers = await _appDbContext.PortMarkers.Include( portMarkers=> portMarkers.portState).Where(portMarker => portMarker.portType.Equals(PortType.AIR) && portMarker.portStateId == stateId).ToListAsync();
        return portMarkers;
      
    }

    public async Task<List<PortMarker>> GetAllAsync()
    {
        List<PortMarker> portMarkers = await _appDbContext.PortMarkers.Include(portMarkers => portMarkers.portState).ToListAsync();
        return portMarkers;


    }

    public async Task<List<PortMarker>> GetAllByAirAsync()
    {
        List<PortMarker> portMarkers = await _appDbContext.PortMarkers.Include(portMarkers => portMarkers.portState).Where(portMarker => portMarker.portType.Equals(PortType.AIR)).ToListAsync();
        return portMarkers;
    }

    public async Task<List<PortMarker>> GetAllByWaterAsync()
    {

        List<PortMarker> portMarkers = await _appDbContext.PortMarkers.Include(portMarkers => portMarkers.portState).Where(portMarker => portMarker.portType.Equals(PortType.WATER)).ToListAsync();
        return portMarkers;

    }

    public async Task<List<PortMarker>> GetAllPortsByStateAsync(int portStateId)
    {


List <PortMarker> portMarkers = await _appDbContext.PortMarkers.Include( portMarkers=> portMarkers.portState).Where(portMarker => portMarker.portState.id == portStateId).ToListAsync();
        return portMarkers;
          }

    public async Task<List<PortMarker>> GetAllWaterPortsByStateAsync(int portStateId)
    {
        
        List <PortMarker> portMarkers = await _appDbContext.PortMarkers.Include( portMarkers=> portMarkers.portState).Where(portMarker => portMarker.portType.Equals(PortType.WATER) && portMarker.portStateId == portStateId).ToListAsync();
        return portMarkers;
      

    }

    public async Task<PortMarker> GetByIdAsync(int id)
    {

        PortMarker portMarker = await _appDbContext.PortMarkers.FindAsync(id);
        return portMarker;
        
    }
}