namespace backend.Models;

public class PortMarker
{

public int id { get; set; }

 public string label { get; set; }

public float lat { get; set; }

public float lng { get; set; }

public  State state { get; set; }

public PortType portType {get; set;}

public string image {get;  set; }
public string color {get; set; }

public string address {get; set; }

public int stateId { get; set; }


}
