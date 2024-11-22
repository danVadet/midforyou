namespace backend.Services;

using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using backend.Models;
using backend.Repositories;
using Microsoft.EntityFrameworkCore;

public class ProductRepository : IProductRepository
{
    private readonly ApplicationDbContext _applicationDbContext;
    private readonly IMapper _mapper;

    public ProductRepository(ApplicationDbContext applicationDbContext, IMapper mapper)
    {
        _applicationDbContext = applicationDbContext;
        _mapper = mapper;

    }
    public async Task CreateAsync(ProductDTO productDTO)
    {
       
        Product product = _mapper.Map<Product>(productDTO);
        _applicationDbContext.Products.Add(product);
        await _applicationDbContext.SaveChangesAsync();
    }

  

     public async Task <Product> GetByIdAsync(int id)
    {

    Product product = await _applicationDbContext.Products.FindAsync(id);
    return product;
    }

    public async Task UpdateAsync(Product product)
    {
         _applicationDbContext.Products.Update(product);
        await _applicationDbContext.SaveChangesAsync();
       
    }
       public async Task DeleteAsync(Product product)
    {
        _applicationDbContext.Products.Remove(product);
        await _applicationDbContext.SaveChangesAsync();
    }

    public async Task <List<Product>> GetAllAsync()
    {

        List <Product> products = await _applicationDbContext.Products.ToListAsync();
        return products;    
    }
}