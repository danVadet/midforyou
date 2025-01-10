
namespace backend.Repositories;
using backend.Models;

public interface IProductRepository {

    public Task <Product>  CreateAsync (Product product);
    public Task<List<Product>> GetAllPerPageAsync(int page, int pageSize );
    public Task<List<Product>> GetAllAsync();
    public Task<Product> GetByIdAsync(int id);
    public Task <Product> UpdateAsync (Product product);
    public Task <Product> DeleteAsync (Product product);


}