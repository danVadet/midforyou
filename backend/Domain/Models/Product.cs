
namespace backend.Domain;

public class Product
{

    public int id { get; set; }

    public required string name { get; set; }

    public float length { get; set; }

    public float width { get; set; }

    public float height { get; set; }

    public float weight { get; set; }

    public string measureUnit { get; set; }


    public int quantity { get; set; }
    public float volume { get; set; }

    public float volumeTotal { get; set; }

    public float weightTotal { get; set; }

    public int measureUnitId { get; set; }
    

    

}