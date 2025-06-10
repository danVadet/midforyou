using AutoMapper;
using backend.Domain;
using backend.Models;

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

        createContainerRequest.image = $"{_httpContextAccessor.HttpContext.Request.Scheme}://{_httpContextAccessor.HttpContext.Request.Host}/Images/Containers/{createContainerRequest.pic.FileName}";
        createContainerRequest.capacityWeight = createContainerRequest.capacityWeight * 1000;
        createContainerRequest.products = products;
        var container = _mapper.Map<Container>(createContainerRequest);
        await _containerRepository.CreateAsync(container);
    }

    public async Task CreateProductAsync(CreateProductRequest createProductRequest)
    {
        Container container = await _containerRepository.GetByIdAsync(createProductRequest.containerId);

        container.products = new List<Product>();

        
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

        List<Product> productsByMeter = products.FindAll(p => p.measureUnit == "m");

        var sumWeightTotal = products.Sum(product => product.weightTotal);
        var sumVolumeTotal = productsByMeter.Sum(product => product.volumeTotal);

        var pctWeight = Convert.ToInt64(sumWeightTotal / container.capacityWeight * 100);
        var pctVolume = Convert.ToInt64(sumVolumeTotal / container.capacityVolume * 100);

        container.products = products;


        if (sumWeightTotal <= container.capacityWeight && sumVolumeTotal <= container.capacityVolume)
        {

            return new { container, pctWeight, pctVolume};

        }
        else
        {
            return new { container };
        }
    }
}