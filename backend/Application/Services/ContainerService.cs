using AutoMapper;
using backend.Domain;

public class ContainerService : IContainerService
{
    private readonly IContainerRepository _containerRepository;
    private readonly IProductRepository _productRepository;
    private readonly IWebHostEnvironment _webHostEnviroment;
    private readonly IHttpContextAccessor _httpContextAccessor;
    private readonly IMapper _mapper;

    public ContainerService(IContainerRepository containerRepository, IProductRepository productRepository, IWebHostEnvironment webHostEnvironment, IHttpContextAccessor httpContextAcessor, IMapper mapper)
    {
        _containerRepository = containerRepository;
        _productRepository = productRepository;
        _webHostEnviroment = webHostEnvironment;
        _httpContextAccessor = httpContextAcessor;
        _mapper = mapper;
    }

    public async Task CreateAsync(CreateContainerRequest createContainerRequest)
    {

        List<Product> products = await _productRepository.GetAllAsync();

        var uploadImage = Path.Combine(_webHostEnviroment.WebRootPath, $"Images/Containers", createContainerRequest.pic.FileName);
        using (var stream = new FileStream(uploadImage, FileMode.Create))
        {
            await createContainerRequest.pic.CopyToAsync(stream);
        }

        // createContainerRequest.image = $"{_httpContextAccessor.HttpContext.Request.Scheme}://{_httpContextAccessor.HttpContext.Request.Host}/Images/Containers/{createContainerRequest.pic.FileName}";
        createContainerRequest.image = $"Images/Containers/{createContainerRequest.pic.FileName}";
        createContainerRequest.capacityWeightKg = createContainerRequest.capacityWeightKg * 1000;
        createContainerRequest.capacityVolumeFt3 = MathF.Round(createContainerRequest.capacityVolumeM3 * 35.315f, 2);
        createContainerRequest.capacityWeightLb = MathF.Round(createContainerRequest.capacityWeightKg * 2.20462f, 2);
        createContainerRequest.products = products;

        var container = _mapper.Map<Container>(createContainerRequest);
        await _containerRepository.CreateAsync(container);
    }

    public async Task<List<ContainerResponse>> GetAllAsync()
    {

        List<Container> containers = await _containerRepository.GetAllAsync();
        return _mapper.Map<List<ContainerResponse>>(containers);
    }

    public async Task<ContainerResponse> GetByIdAsync(int id)
    {
        Container container = await _containerRepository.GetByIdAsync(id);
        return _mapper.Map<ContainerResponse>(container);
    }

    public async Task<object> verifityCapacityAsync(int id)
    {
        Container container = await _containerRepository.GetByIdAsync(id);
        List<Product> products = await _productRepository.GetAllAsync();
        
        var sumWeightTotalKg = products.FindAll(p => p.weightUnit == WeightUnit.kg).Sum(product => product.weightTotal);
        var sumWeightTotalLb = products.FindAll(p => p.weightUnit == WeightUnit.lb).Sum(product => product.weightTotal);
        var sumVolumeTotalM3 = products.FindAll(p => p.measureUnit == MeasureUnit.m).Sum(product => product.volumeTotal);
        var sumVolumeTotalFt3 = products.FindAll(p => p.measureUnit == MeasureUnit.ft || p.measureUnit == MeasureUnit.yd || p.measureUnit == MeasureUnit.inch).Sum(product => product.volumeTotal);

        var pctWeightKg = Convert.ToInt64(sumWeightTotalKg / container.capacityWeightKg * 100);
        var pctWeightLb = Convert.ToInt64(sumWeightTotalLb / container.capacityWeightLb * 100);
        var pctVolumeM3 = Convert.ToInt64(sumVolumeTotalM3 / container.capacityVolumeM3 * 100);
        var pctVolumeFt3 = Convert.ToInt64(sumVolumeTotalFt3 / container.capacityVolumeFt3 * 100);

        container.products = products;


        if (sumWeightTotalKg <= container.capacityWeightKg && sumVolumeTotalM3 <= container.capacityVolumeM3 || sumWeightTotalLb <= container.capacityWeightLb && sumVolumeTotalFt3 <= container.capacityVolumeFt3  )
        {

            return new { container, pctWeightKg, pctWeightLb, pctVolumeM3, pctVolumeFt3};
        } 

        else
        {
            return new { container, pctWeightKg, pctVolumeM3, pctVolumeFt3 };
        }
    }
}