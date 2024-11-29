
using backend.Models;

public interface IProductService {

    public Task CreateAsync (ProductRequest createProductRequest);
    public Task<List<ProductResponse>> GetAllAsync();
    public Task<ProductResponse> GetByIdAsync(int id);
    public Task UpdateAsync (int id, ProductRequest updateProductRequest);
    public Task DeleteAsync (int id);
    }