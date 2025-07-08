

namespace backend.Domain;

public interface IProductRepository
{
    Task<Product> CreateAsync(Product product);
    Task<List<Product>> GetAllAsync();
    Task<List<Product>> GetAllBySearchAsync(string search);
    Task<Product> GetByIdAsync(int id);
    Task<Product> UpdateAsync(Product product);
    Task<Product> DeleteAsync(int id);
}