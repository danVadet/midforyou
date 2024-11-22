
using backend.Models;

public interface IProductService {

    public Task CreateAsync (ProductDTO product);
    public Task<List<Product>> GetAllAsync();
    public Task<Product> GetByIdAsync(int id);
    public Task UpdateAsync (Product product);
    public Task DeleteAsync (Product product);
    }