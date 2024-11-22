
namespace backend.Services;

using System.Collections.Generic;
using System.Threading.Tasks;
using backend.Models;
using backend.Repositories;
using backend.Services;
using Microsoft.EntityFrameworkCore;

public class ProductService : IProductService
{
    private readonly IProductRepository _productRepository;
    public ProductService(IProductRepository applicationDbContext)
    {
        _productRepository = applicationDbContext;
    }
    public async Task CreateAsync(ProductDTO productDTO)
    {
       
      await  _productRepository.CreateAsync(productDTO);
    }
     public async Task <Product> GetByIdAsync(int id)
    {

    Product product = await _productRepository.GetByIdAsync(id);
    return product;
    }

    public async Task UpdateAsync(Product product)
    {
        await _productRepository.UpdateAsync(product);
       
    }
       public async Task DeleteAsync(Product product)
    {
        await _productRepository.DeleteAsync(product);
    }
    public async Task <List<Product>> GetAllAsync()
    {

        List <Product> products = await _productRepository.GetAllAsync();
        return products;    
    }
}