namespace backend.Models;

using System.Text.Json.Serialization;

public class Container {

    public int id  { get; set; }

    public string? typeContainer {get; set; }


    public List <Product> products { get; set; }

    [JsonIgnore]
    public Product product { get; set; }

    public int? productId { get; set; }

    public float  capacidadePeso { get; set; }

    public float  capacidadeVolume { get; set; }


    

}