using backend.Models;
using Microsoft.EntityFrameworkCore;




public class ApplicationDbContext :DbContext {

    public ApplicationDbContext (DbContextOptions<ApplicationDbContext> options)  :base(options) {

    }
    public DbSet<Product> Products { get; set; }
    public DbSet<Container> Containers { get; set; }

     public DbSet<Marker> Markers { get; set; }

     
     public DbSet<Incoterm> Incoterms { get; set; }

     
     public DbSet<PortMarker> PortMarkers { get; set; }

      
}

