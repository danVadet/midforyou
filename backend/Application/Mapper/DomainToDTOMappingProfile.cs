

using AutoMapper;
using backend.Models;


public class DomainToDTOMappingProfile : Profile
{


    public DomainToDTOMappingProfile()
    {
        CreateMap<CreateProductRequest, Product>();
        CreateMap<UpdateProductRequest, Product>();
        CreateMap<Product, ProductResponse>();

        CreateMap<CreateContainerRequest, Container>();
        CreateMap<Container, ContainerResponse>();

        CreateMap<CreatePortStateRequest, PortState>();
        CreateMap<PortState, PortStateResponse>();

        CreateMap<CreatePortMarkerRequest, PortMarker>();
        CreateMap<PortMarker, PortMarkerResponse>();

    }
}