
using backend.Domain;
using Microsoft.EntityFrameworkCore;

namespace backend.Infrastructure.Repositories;

public class ProductRepository : IProductRepository
{

    private readonly AppDbContext _appDbContext;

    public ProductRepository(AppDbContext appDbContext)
    {
        _appDbContext = appDbContext;

    }


    public async Task<Product> CreateAsync(Product product)
    {
        _appDbContext.Products.Add(product);
        await _appDbContext.SaveChangesAsync();
        return product;
    }

    public async Task<List<Product>> GetAllAsync()
    {


        List<Product> products = await _appDbContext.Products.ToListAsync();
        return products;


        
      
    }

    public async Task<List<Product>> GetAllBySearchAsync(string search)
    {

        List<Product> products = await _appDbContext.Products.Where(product => product.name.ToLower().StartsWith(search.ToLower())).ToListAsync();
        return products;

    }

    public async Task<Product> GetByIdAsync(int id)
    {

        Product product = await _appDbContext.Products.FindAsync(id);
        return product;


    }

    public async Task<Product> UpdateAsync(Product product)
    {
       
        _appDbContext.Update(product);
        await _appDbContext.SaveChangesAsync();
        return product;

    }

    public async Task<Product> DeleteAsync(int id)
    {


       Product product = await _appDbContext.Products.FindAsync(id);
        _appDbContext.Products.Remove(product);
        await _appDbContext.SaveChangesAsync();
        return product;
        
    }

}
