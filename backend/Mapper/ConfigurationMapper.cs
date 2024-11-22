

using AutoMapper;
using backend.Models;

public class ConfigurationMapper : Profile 
{
    public ConfigurationMapper()
    {
        CreateMap <Product, ProductDTO>().ReverseMap();
    }
}