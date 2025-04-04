using Microsoft.EntityFrameworkCore;
using backend.Models;


namespace backend.Data;



public class AppDbContext :DbContext {

    public AppDbContext (DbContextOptions<AppDbContext> options)  :base(options) {

    }
    public DbSet<Product> Products { get; set; }

    public DbSet<State> States { get; set; }

    public DbSet<PortMarker> PortMarkers { get; set; }
    
    public DbSet<Container> Containers { get; set; }


      
}