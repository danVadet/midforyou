using backend.Models;
using Microsoft.EntityFrameworkCore;




public class ApplicationDbContext :DbContext {

    public ApplicationDbContext (DbContextOptions<ApplicationDbContext> options)  :base(options) {

    }
    public DbSet<Product> Products { get; set; }
    public DbSet<Container> Containers { get; set; }

     public DbSet<State> States { get; set; }
     
     public DbSet<PortMarker> PortMarkers { get; set; }

      
}

