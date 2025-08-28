
namespace backend.Domain;

public class Product
{

    public int id { get; set; }

    public required string name { get; set; }

    public float length { get; set; }

    public float width { get; set; }

    public float height { get; set; }

    public float weight { get; set; }

    public MeasureUnit measureUnit { get; set; }
    public WeightUnit weightUnit { get; set; }

    public int quantity { get; set; }
    public float volume { get; set; }

    public float volumeTotal { get; set; }

    public float weightTotal { get; set; }

    public required Container container { get; set; }
    
    public int containerId { get; set;}
}