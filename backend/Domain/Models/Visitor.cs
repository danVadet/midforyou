
using backend.Domain;

namespace backend.Models;

public class Visitor
{

    public int id { get; set; }
    public required string fullName { get; set; }
    public required string phoneNumber { get; set; }
    public required string email { get; set; }
    public required string companyName { get; set; }
    public required string companyCNPJ { get; set;  }
    public required string ramoAtividade { get; set; }
    public required State state { get; set; }
    public required City city { get; set; }
    public required string subject { get; set;  }
    public required string message { get; set; }
}