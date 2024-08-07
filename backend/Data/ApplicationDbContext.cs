using backend.Models;
using Microsoft.EntityFrameworkCore;




public class ApplicationDbContext :DbContext {

    public ApplicationDbContext (DbContextOptions<ApplicationDbContext> options)  :base(options) {

    }
    public DbSet<Product> Products { get; set; }
    public DbSet<Container> Containers { get; set; }

    public DbSet<Visitor> Vistors { get; set; }

      
}

