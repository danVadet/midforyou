namespace backend.Models;

using System.Text.Json.Serialization;

public class Container {

    public int id  { get; set; }

    public List <Product> products { get; set; }

    public int  quantity { get; set; } = 1;


    [JsonIgnore]
    public Product product { get; set; }

    public int productId { get; set; }

    public float  pesoTotal { get; set; }

    public float  volumeTOTAL {get; set; }


    

}