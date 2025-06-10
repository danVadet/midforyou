
using backend.Models;

public class CreateContainerRequest
{

    public required string image { get; set; }

    public required string name { get; set; }

    public float capacityWeight { get; set; }

    public float capacityVolume { get; set; }

    public required List<Product> products { get; set; }

    public required IFormFile pic { get; set;  }
}