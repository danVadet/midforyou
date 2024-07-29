
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
        try
        {
            var smtpClient = new SmtpClient("smtp.gmail.com", 587);
            smtpClient.EnableSsl = true;
            smtpClient.Timeout = 60 * 60;
            smtpClient.UseDefaultCredentials = false;
            smtpClient.Credentials = new NetworkCredential("danielvieiramelolima@gmail.com", "");

            mailMessage.From = new MailAddress("danielvieiramelolima@gmail.com", "Daniel Vieira");
            mailMessage.Body = "Testando o contato";
            mailMessage.Subject = "Teste contato";
            mailMessage.IsBodyHtml = true;
            mailMessage.Priority = MailPriority.Normal;
            mailMessage.To.Add("Testando o contato do cliente");



            smtpClient.Send(mailMessage);
            return Ok("Envio com sucesso");

        }
        catch (Exception ex)
        {
            return Ok(ex);

        }

    }
}