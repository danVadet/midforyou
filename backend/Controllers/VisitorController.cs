
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
    public ActionResult sendEmail([FromBody] Visitor visitor)
    {

        MailMessage mailMessage = new MailMessage();
               
    
       
            SmtpClient smtpClient = new SmtpClient("smtp.gmail.com", 587);
            mailMessage.From = new MailAddress("danielvieiramelolima@gmail.com");
            mailMessage.To.Add(visitor.email);
            mailMessage.Subject = "Teste contato";
            mailMessage.Body = "<h1>" + visitor.mensagem +  "</h1>";
            mailMessage.IsBodyHtml = true;

        
 
            smtpClient.Credentials = new NetworkCredential("danielvieiramelolima@gmail.com", "zrzz qqli boyp neia");
            smtpClient.EnableSsl = true;

            smtpClient.Send(mailMessage);
            
            _applicationDbContext.Vistors.Add(visitor);
            return Created("Envio com sucesso", visitor);

        }
}