namespace backend.DTOs;

using backend.Models;

public class CreateContainerRequest {
    
    public string? name {get;  set; }
    public IFormFile? imageFile;

     public float  capacidadePeso { get; set; }

    public float  capacidadeVolume { get; set; }




}