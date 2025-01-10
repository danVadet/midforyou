
namespace backend.Services;

using System.Collections.Generic;
using System.Threading.Tasks;
using backend.Models;
using backend.Repositories;
using backend.Services;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Http;
using AutoMapper;

public class ProductService : IProductService
{
    private readonly IProductRepository _productRepository;
    private readonly IMapper _mapper;
    public ProductService(IProductRepository productRepository, IMapper mapper)
    {
        _productRepository = productRepository;
        _mapper = mapper;
    }
    public async Task CreateAsync(ProductRequest productRequest)
    {
        
      Product product  = _mapper.Map<Product>(productRequest);
      await  _productRepository.CreateAsync(product);
    }
     public async Task <ProductResponse> GetByIdAsync(int id)
    {

    Product product = await _productRepository.GetByIdAsync(id);
    return  _mapper.Map<ProductResponse>(product);
    }

    public async Task UpdateAsync(int id, ProductRequest productRequest)
    {

        Product currentProduct = await _productRepository.GetByIdAsync(id);

            var pesoTotal = productRequest.peso * productRequest.quantidade;
            var volumeTotal = productRequest.volume * productRequest.quantidade;
            
            productRequest.pesoTotal = pesoTotal;
            productRequest.volumeTotal = volumeTotal;

            currentProduct.nome = productRequest.nome;
            currentProduct.quantidade = productRequest.quantidade;
            currentProduct.peso = productRequest.peso;
            currentProduct.volume =  productRequest.volume;
            currentProduct.pesoTotal =  productRequest.pesoTotal;
            currentProduct.volumeTotal = productRequest.volumeTotal;
            
        await _productRepository.UpdateAsync(currentProduct);
       
    }
       public async Task DeleteAsync(int id)
    {

        Product product = await _productRepository.GetByIdAsync(id);
        await _productRepository.DeleteAsync(product);
    }
    public async Task <List<ProductResponse>> GetAllAsync()
    {

        List <Product> products = await _productRepository.GetAllAsync();
        return  _mapper.Map<List<ProductResponse>>(products);    
    }
     public async Task <List<ProductResponse>> GetAllPerPageAsync(int page, int pageSize)
    {

        List <Product> products = await _productRepository.GetAllPerPageAsync(page, pageSize);
        return  _mapper.Map<List<ProductResponse>>(products);    
    }
}