namespace backend.DTOs;

using backend.Models;

public class ContainerCreateResponse {

    public int id  { get; set; }

    public string? name {get; set; }
    public string? image  {get; set; }


    public float  capacidadePeso { get; set; }

    public float  capacidadeVolume { get; set; }
}