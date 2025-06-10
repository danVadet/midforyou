

using AutoMapper;
using backend.Domain;
using backend.Models;



public class DomainToDTOMappingProfile : Profile
{


    public DomainToDTOMappingProfile()
    {
        CreateMap<CreateProductRequest, Product>();
        CreateMap<UpdateProductRequest, Product>();
        CreateMap<backend.Domain.Product, ProductResponse>();

        CreateMap<CreateContainerRequest, Container>();
        CreateMap<Container, ContainerResponse>();

        CreateMap<CreatePortStateRequest, PortState>();
        CreateMap<PortState, PortStateResponse>();

        CreateMap<CreatePortMarkerRequest, PortMarker>();
        CreateMap<PortMarker, PortMarkerResponse>();

    }
}