namespace backend.DTOs;

using backend.Models;

public class CreateContainerRequest {


    public List <Product> products { get; set; }

    public Product product { get; set; }

    public int productId { get; set; } 



}