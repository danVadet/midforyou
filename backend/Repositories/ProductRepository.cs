namespace backend.Repositories;

using System.Collections.Generic;
using System.Threading.Tasks;
using backend.Models;
using backend.Repositories;
using Microsoft.EntityFrameworkCore;

public class ProductRepository : IProductRepository
{
    private readonly ApplicationDbContext _applicationDbContext;

    public ProductRepository(ApplicationDbContext applicationDbContext)
    {
        _applicationDbContext = applicationDbContext;
    }
    public async Task <Product> CreateAsync(Product product)
    {
        _applicationDbContext.Products.Add(product);
        await _applicationDbContext.SaveChangesAsync();
        return product;
    }
     public async Task <Product> GetByIdAsync(int id)
    {

        Product product = await _applicationDbContext.Products.FindAsync(id);
        return product;
    }

    public async Task <Product> UpdateAsync(Product product)
    {
         _applicationDbContext.Products.Update(product);
        await _applicationDbContext.SaveChangesAsync();
        return product;
       
    }
       public async Task <Product> DeleteAsync(Product product)
    {
        _applicationDbContext.Products.Remove(product);
        await _applicationDbContext.SaveChangesAsync();
       return product;
    }

    public async Task <List<Product>> GetAllPerPageAsync(int page, int pageSize)
    {

        List <Product> products = await _applicationDbContext.Products.Skip((page - 1) * pageSize).Take(pageSize).ToListAsync();
        return products;    
    }
    public async Task <List<Product>> GetAllAsync()
    {

        List <Product> products = await _applicationDbContext.Products.ToListAsync();
        return products;    
    }

}