using AutoMapper;
using backend.Domain;
using backend.Models;

public class ProductService : IProductService
{
    private readonly IProductRepository _productRepository;
    private readonly IContainerRepository _containerRepository;
    private readonly IMapper _mapper;

    public ProductService(IProductRepository productRepository, IContainerRepository containerRepository, IMapper mapper)
    {
        _productRepository = productRepository;
        _containerRepository = containerRepository;
        _mapper = mapper;
    }

    public async Task CreateAsync(CreateProductRequest createProductRequest)
    {

        Container container = await  _containerRepository.GetByIdAsync(createProductRequest.containerId);
        createProductRequest.containerId = container.id;
        
        var weightTotal = createProductRequest.weight * createProductRequest.quantity;
        createProductRequest.weightTotal = weightTotal;

        if (createProductRequest.weightUnit == WeightUnit.g)
        {
            createProductRequest.weightTotal = weightTotal / 1000;
        }

        if (createProductRequest.measureUnit == MeasureUnit.m || createProductRequest.measureUnit == MeasureUnit.ft)
        {
            
            var volume = createProductRequest.length * createProductRequest.width * createProductRequest.height;
            var volumeTotal = volume * createProductRequest.quantity;
            createProductRequest.volume = volume;
            createProductRequest.volumeTotal = volumeTotal;
        }

        if (createProductRequest.measureUnit == MeasureUnit.yd)
        {
            var volume = createProductRequest.length * createProductRequest.width * createProductRequest.height;
            var volumeTotal = volume * createProductRequest.quantity;
            createProductRequest.volume = volume;
            createProductRequest.volumeTotal = MathF.Pow(3, 3) * volumeTotal;
        }

        if (createProductRequest.measureUnit == MeasureUnit.inch)
        {

            var volume = MathF.Round(createProductRequest.length * createProductRequest.width * createProductRequest.height / 1728, 3);
            var volumeTotal = volume * createProductRequest.quantity;
            createProductRequest.volume = volume / 1728;
            createProductRequest.volumeTotal = volumeTotal;
        }

        var product = _mapper.Map<Product>(createProductRequest);
        await _productRepository.CreateAsync(product);
    }

    public async Task<List<ProductResponse>> GetAllAsync()
    {

        List<Product> products = await _productRepository.GetAllAsync();
        return _mapper.Map<List<ProductResponse>>(products);
    }

    public async Task<List<ProductResponse>> GetAllBySearch(string search)
    {
        List<Product> products = await _productRepository.GetAllBySearchAsync(search);
        return _mapper.Map<List<ProductResponse>>(products);
    }

    public async Task<ProductResponse> GetByIdAsync(int id)
    {

        Product productEntity = await _productRepository.GetByIdAsync(id);
        return _mapper.Map<ProductResponse>(productEntity);
    }

    public async Task<ProductResponse> UpdateAsync(UpdateProductRequest updateProductRequest)
    {
        Product product = await _productRepository.GetByIdAsync(updateProductRequest.id);

        if (product != null)
        {
            product.name = updateProductRequest.name;
            product.length = updateProductRequest.length;
            product.width = updateProductRequest.width;
            product.height = updateProductRequest.height;
            product.weight = updateProductRequest.weight;
            product.quantity = updateProductRequest.quantity;
            product.containerId = updateProductRequest.containerId;


            var weightTotal = updateProductRequest.weight * updateProductRequest.quantity;

            product.weightTotal = updateProductRequest.weightTotal = weightTotal;
            product.measureUnit = updateProductRequest.measureUnit;
            product.weightUnit = updateProductRequest.weightUnit;

            if (updateProductRequest.weightUnit == WeightUnit.g)
            {
                updateProductRequest.weightTotal = weightTotal / 1000;
                product.weightTotal = updateProductRequest.weightTotal;

                await _productRepository.UpdateAsync(product);
                return _mapper.Map<ProductResponse>(product);
            }

            if (updateProductRequest.measureUnit == MeasureUnit.m || updateProductRequest.measureUnit == MeasureUnit.ft)
            {
                var volume = updateProductRequest.length * updateProductRequest.width * updateProductRequest.height;
                var volumeTotal = volume * updateProductRequest.quantity;

                product.volume = updateProductRequest.volume = volume;
                product.volumeTotal = updateProductRequest.volumeTotal = volumeTotal;

                await _productRepository.UpdateAsync(product);
                return _mapper.Map<ProductResponse>(product);
            }

            if (updateProductRequest.measureUnit == MeasureUnit.yd)
            {
                var volume = updateProductRequest.length * updateProductRequest.width * updateProductRequest.height;
                var volumeTotal = MathF.Pow(3, 3) * volume * updateProductRequest.quantity;

                product.volume = updateProductRequest.volume = volume;
                product.volumeTotal = updateProductRequest.volumeTotal = volumeTotal;

                await _productRepository.UpdateAsync(product);
                return _mapper.Map<ProductResponse>(product);
            }
            if (updateProductRequest.measureUnit == MeasureUnit.inch)
            {
                var volume = MathF.Round(updateProductRequest.length * updateProductRequest.width * updateProductRequest.height / 1728, 3);
                var volumeTotal = volume * updateProductRequest.quantity;
                updateProductRequest.volume = volume;
                updateProductRequest.volumeTotal = volumeTotal;

                product.volume = updateProductRequest.volume = volume;
                product.volumeTotal = updateProductRequest.volumeTotal = volumeTotal;

                await _productRepository.UpdateAsync(product);
                return _mapper.Map<ProductResponse>(product);
            }
            else
            {
                product.volume = updateProductRequest.volume = 0;
                product.volumeTotal = updateProductRequest.volumeTotal = 0;

                await _productRepository.UpdateAsync(product);
                return _mapper.Map<ProductResponse>(product);
            }
        }
        return null;
    }
    public async Task<ProductResponse> DeleteAsync(int id)
    {
        Product productEntity = await _productRepository.DeleteAsync(id);
        return _mapper.Map<ProductResponse>(productEntity);
    }
    public async Task<object> GetSumTotalVolumeAsync()
    {

        List<Product> products = await _productRepository.GetAllAsync();

        var sumVolumeTotal = products.Sum(product => product.volumeTotal);
       
        return new { sumVolumeTotal };
    }    
}