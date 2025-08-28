using backend.Domain;

namespace backend.Models;

public class CreateProductRequest
{

    public required string name { get; set; }

    public float length { get; set; }

    public float width { get; set; }

    public float height { get; set; }

    public float weight { get; set; }

    public int quantity { get; set; }
    public float volume { get; set; }

    public float volumeTotal { get; set; }

    public float weightTotal { get; set; }

    public MeasureUnit measureUnit { get; set; }

    public WeightUnit weightUnit { get; set; }

    
    public int containerId { get; set;}
    
   


}