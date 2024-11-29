
using System.Net;
using System.Net.Mail;
using backend.Models;
using Microsoft.AspNetCore.Mvc;

[Controller]
public class VisitorController : ControllerBase
{
    private readonly ApplicationDbContext _applicationDbContext;
    public VisitorController(ApplicationDbContext applicationDbContext)
    {
        _applicationDbContext = applicationDbContext;

    }

    [HttpPost("visitor/sendEmail")]
    public async Task  <ActionResult> sendEmail([FromBody] Visitor visitor)
    {

        MailMessage mailMessage = new MailMessage();
               
            SmtpClient smtpClient = new SmtpClient("smtp.gmail.com", 587);
            mailMessage.From = new MailAddress("danielvieiramelolima@gmail.com");
            mailMessage.To.Add(visitor.email);
            mailMessage.Subject = "Teste contato";
            mailMessage.Body =  "<h1> Cliente: " + visitor.nome  + "</h1>"  +
                                 "<h1> Telefone:  " + "(" + visitor.telefone[0] + visitor.telefone[1] + ") " +  visitor.telefone[2] + visitor.telefone[3] + visitor.telefone[4]  + visitor.telefone[5] + visitor.telefone[6] + " - " + visitor.telefone[7] + visitor.telefone[8] + visitor.telefone[9] + visitor.telefone[10] +"</h1>" +
                                 "<h1>" +  "Nome da empresa: " +  visitor.nomeEmpresa + "</h1>" +
                                 "<h1> Ramo de atividade: " + visitor.ramoAtividade + "</h1>" + 
                                 "<h1> Local: " + visitor.local + "</h1>" +
                                 "<h1>" + visitor.mensagem +  "</h1>";
            mailMessage.IsBodyHtml = true;
 
            smtpClient.Credentials = new NetworkCredential("danielvieiramelolima@gmail.com", "zrzz qqli boyp neia");
            smtpClient.EnableSsl = true;
            smtpClient.Send(mailMessage);            
            return Created("Envio com sucesso", visitor);

        }
}