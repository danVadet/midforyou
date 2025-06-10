namespace backend.Domain;

public class Container
{

 public int id { get; set; }

 public required string image  { get; set; }

 public required string name { get; set; }

 public float capacityWeight { get; set; }

 public float  capacityVolume { get; set; }

 public required List <Product> products { get; set; }

}
