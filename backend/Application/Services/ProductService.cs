using AutoMapper;
using backend.Domain;
using backend.Models;

public class ProductService : IProductService
{
    private readonly IProductRepository _productRepository;
    private readonly IMapper _mapper;

    public ProductService(IProductRepository productRepository, IMapper mapper)
    {
        _productRepository = productRepository;
        _mapper = mapper;
    }

    public async Task CreateAsync(CreateProductRequest  createProductRequest)
    {

        List <DropdownListItem> values = EnumHelper.ConvertEnumToDropDownSource<MeasureUnit>();
        var enumValue = values.Find(v => v.value == createProductRequest.measureUnitId);

        var  weightTotal = createProductRequest.weight * createProductRequest.quantity;
        createProductRequest.weightTotal = weightTotal;
        createProductRequest.measureUnit = enumValue.name;
        createProductRequest.measureUnitId = enumValue.value;


        if (createProductRequest.measureUnit == "m")
        {
            var volume = createProductRequest.length * createProductRequest.width * createProductRequest.height;
            var volumeTotal = volume * createProductRequest.quantity;
            createProductRequest.volume = volume;
            createProductRequest.volumeTotal = volumeTotal;

        }
        var product = _mapper.Map<Product>(createProductRequest);
        await _productRepository.CreateAsync(product);
    }

    public async Task<List<ProductResponse>> GetAllAsync()
    {
        
        List <Product> products = await _productRepository.GetAllAsync();
        return _mapper.Map<List<ProductResponse>>(products);
    }

    public async Task<List<ProductResponse>> GetAllBySearch(string search)
    {
        List <Product> products = await _productRepository.GetAllBySearchAsync(search);
        return _mapper.Map<List<ProductResponse>>(products);

    }

    public async Task<ProductResponse> GetByIdAsync(int id)
    {

        Product productEntity = await _productRepository.GetByIdAsync(id);
        return _mapper.Map<ProductResponse>(productEntity);
    }

    public async Task<ProductResponse> UpdateAsync(int id, UpdateProductRequest updateProductRequest)
    {
        Product product = await _productRepository.GetByIdAsync(id);

        List <DropdownListItem> values = EnumHelper.ConvertEnumToDropDownSource<MeasureUnit>();
        var enumValue = values.Find(v => v.value == updateProductRequest.measureUnitId);


        if (product != null)
        {
            product.name = updateProductRequest.name;
            product.length = updateProductRequest.length;
            product.width = updateProductRequest.width;
            product.height = updateProductRequest.height;
            product.weight = updateProductRequest.weight;
            product.quantity = updateProductRequest.quantity;

            var weightTotal = updateProductRequest.weight * updateProductRequest.quantity;

            product.weightTotal = updateProductRequest.weightTotal = weightTotal;
            product.measureUnit = updateProductRequest.measureUnit = enumValue.name;
            product.measureUnitId = updateProductRequest.measureUnitId = enumValue.value;


            if (updateProductRequest.measureUnit == "m")
            {
                var volume = updateProductRequest.length * updateProductRequest.width * updateProductRequest.height;
                var volumeTotal = volume * updateProductRequest.quantity;

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
    public async Task <ProductResponse> DeleteAsync(int id)
    {
        Product productEntity = await _productRepository.DeleteAsync(id);
        return _mapper.Map<ProductResponse>(productEntity);   
    }
} 