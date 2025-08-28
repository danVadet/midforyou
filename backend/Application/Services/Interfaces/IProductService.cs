

using backend.Models;

public interface IProductService
{
    Task CreateAsync(CreateProductRequest createProductRequest);
    Task<List<ProductResponse>> GetAllAsync();

    Task<List<ProductResponse>> GetAllBySearch(string search);

    Task<ProductResponse> GetByIdAsync(int id);

    Task<ProductResponse> UpdateAsync(UpdateProductRequest updateProductRequest);

    Task<ProductResponse> DeleteAsync(int id); 
 




}