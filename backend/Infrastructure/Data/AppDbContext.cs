using Microsoft.EntityFrameworkCore;
using backend.Domain;
using backend.Models;


namespace backend.Infrastructure;



public class AppDbContext : DbContext
{

    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {

    }
    public DbSet<Product> Products { get; set; }

    public DbSet<PortState> PortState { get; set; }

    public DbSet<PortMarker> PortMarkers { get; set; }

    public DbSet<Container> Containers { get; set; }

    public DbSet<Visitor> Visitors { get; set; }

    public DbSet<State> State { get; set; }

    public DbSet<City> City { get; set; }

     



    
                      




      
}