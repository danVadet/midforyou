
using System.ComponentModel;

public class ProductResponse {

     public int id  { get; set; }

    public string? nome  { get; set; }

    public int quantidade {get; set; }

    public float peso { get; set; }

      public float length {get; set; }

    public float width { get; set; }

    public float height { get; set; }

    public float volume { get; set; }

    public float volumeTotal { get; set; }

    public float pesoTotal { get; set; }
    public Container container { get; set; }

    
    public int? containerId { get; set; }

}