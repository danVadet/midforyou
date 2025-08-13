using backend.Domain;

public class ContainerResponse
{
    public int id { get; set; }

    public required string image { get; set; }

    public required string name { get; set; }
    
    public float capacityWeightKg { get; set; }

    public float capacityWeightLb { get; set; }

    public float capacityVolumeM3 { get; set; }

    public float capacityVolumeFt3 { get; set; }

    public required List<Product> products { get; set; }
}