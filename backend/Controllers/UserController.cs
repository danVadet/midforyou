
using System.Net;
using System.Net.Mail;
using Microsoft.AspNetCore.Mvc;

[Controller]
public class UserController : ControllerBase
{
    private readonly ApplicationDbContext _applicationDbContext;
    public UserController(ApplicationDbContext applicationDbContext)
    {
        _applicationDbContext = applicationDbContext;

    }

    [HttpPost("sendEmail")]
    public ActionResult sendEmail()
    {

        MailMessage mailMessage = new MailMessage();
               
        SmtpClient smtpClient = new SmtpClient("smtp.gmail.com", 587);
        try
        {
            mailMessage.From = new MailAddress("danielvieiramelolima@gmail.com");
            mailMessage.To.Add("danielvieiramelolima@gmail.com");
            mailMessage.Subject = "Teste contato";
            mailMessage.Body = "<h1> Testando o contato </h1>";
            mailMessage.IsBodyHtml = true;
        
 
            smtpClient.Credentials = new NetworkCredential("danielvieiramelolima@gmail.com", "Rain123");
            smtpClient.EnableSsl = true;

            smtpClient.Send(mailMessage);
            return Ok("Envio com sucesso");

        }
        catch (Exception ex)
        {
            return BadRequest(ex);

        }

    }
}