namespace backend.Models;

public class Container
{

 public int id { get; set; }

 public string image  { get; set; }

 public string name { get; set; }

 public float capacityWeight { get; set; }

 public float  capacityVolume { get; set; }

 public List <Product> products { get; set; }

}