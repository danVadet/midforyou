

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Domain;

public class State
{

    public int id { get; set; }
    public required string nome { get; set; }
    public required string sigla {  get; set;  }
    
}