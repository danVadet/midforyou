
public class PortMarkerResponse {
    
    public int id  { get; set; }
    
    public string? label { get; set; }

    public string? portImage {get; set; }
    
    public string? address {get; set; }

    public string? color { get; set; }

    public float lat { get; set; }

    
    public float lng { get; set; }

    public State state { get; set; }

    public PortType portType { get; set; }

    
    public int? stateId { get; set; }

}