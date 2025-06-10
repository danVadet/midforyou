namespace backend.Models;

public class PortMarker
{

 public int id { get; set; }

 public required  string label { get; set; }

 public float lat { get; set; }

 public float lng { get; set; }

 public required PortState portState { get; set; }

 public PortType portType {get; set;}

 public required string image {get;  set; }
 public required string color {get; set; }

 public required string address {get; set; }

 public int portStateId { get; set; }


}
