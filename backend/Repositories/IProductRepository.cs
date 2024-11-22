
namespace backend.Repositories;
using backend.Models;

public interface IProductRepository {

    public Task CreateAsync (ProductDTO productDTO);
    public Task<List<Product>> GetAllAsync();
    public Task<Product> GetByIdAsync(int id);
    public Task UpdateAsync (Product product);
    public Task DeleteAsync (Product product);


}