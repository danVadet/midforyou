
namespace backend.Services;

using System.Collections.Generic;
using System.Threading.Tasks;
using backend.Repositories;
using backend.Models;
using Microsoft.EntityFrameworkCore;
using AutoMapper;

public class ContainerService : IContainerService {

    private readonly IContainerRepository _containerRepository;
    private readonly IMapper _mapper;

    public ContainerService(IContainerRepository containerRepository, IMapper mapper)
    {
        _containerRepository = containerRepository;
        _mapper = mapper;
    }
    public async Task CreateAsync(ContainerRequest containerRequest)
    {

        Container container  = _mapper.Map<Container>(containerRequest);
        await  _containerRepository.CreateAsync(container);
    }
    public async Task<List<ContainerResponse>> GetAllAsync()
    {
     List <Container> containers = await _containerRepository.GetAllAsync();
     return _mapper.Map<List<ContainerResponse>>(containers);

    }

    public async Task<ContainerResponse> GetByIdAsync(int id)
    {

     Container container = await _containerRepository.GetByIdAsync(id);
     return  _mapper.Map<ContainerResponse>(container);

    }
}