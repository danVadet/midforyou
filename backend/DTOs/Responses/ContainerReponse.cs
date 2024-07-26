namespace backend.DTOs;

using backend.Models;

public record CreateResponse (
    int id,
    List <Product> products,

    int  quantity = 1



);