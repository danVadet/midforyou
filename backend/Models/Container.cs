using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models;

public class Container {

    public int id  { get; set; }

    public string? name {get; set; }
    
    public string? image  {get; set; }

    public float  capacidadePeso { get; set; }

    public float  capacidadeVolume { get; set; }
   
}