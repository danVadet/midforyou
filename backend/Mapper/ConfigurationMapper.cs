

using AutoMapper;
using backend.Models;

public class ConfigurationMapper : Profile 
{
    public ConfigurationMapper()
    {
        CreateMap <Product, ProductResponse>();
        CreateMap <Container, ContainerResponse>();
        CreateMap <State, StateResponse>();
        CreateMap <PortMarker, PortMarkerResponse>();
        
        CreateMap <ProductRequest, Product>();
        CreateMap <ContainerRequest, Container>();
        CreateMap<StateRequest, State>();
        CreateMap <PortMarkerRequest, PortMarker>();


    }
}