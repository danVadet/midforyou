namespace backend.DTOs;

using backend.Models;

public class CreateContainerRequest {



    public List <Product> products { get; set; } = new List<Product>();

    public int  quantity { get; set; } = 1;
    
    public Product product { get; set; }

    public int productId { get; set; } 



}