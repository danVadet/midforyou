
using System.Net;
using System.Net.Mail;
using System.Text;
using backend.Infrastructure;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

public class VisitorController : ControllerBase
{

    [HttpPost("visitor/sendContact")]
    public async Task<ActionResult> sendContact([FromBody] Visitor visitor)
    {

        SmtpClient smtpClient = new SmtpClient("smtp.gmail.com", 587);

        smtpClient.Credentials = new NetworkCredential("danielvieiramelolima@gmail.com", "ovuc vdqc skcu xzni");
        smtpClient.EnableSsl = true;
        smtpClient.UseDefaultCredentials = false;

        // Create email message
        MailMessage mailMessage = new MailMessage();
        mailMessage.From = new MailAddress("danielvieiramelolima@gmail.com");
        mailMessage.To.Add(visitor.email);
        mailMessage.Subject = visitor.subject;
        mailMessage.IsBodyHtml = true;
        StringBuilder mailBody = new StringBuilder();
        mailBody.AppendFormat("<h1>Visitor Registered</h1>");
        mailBody.AppendFormat("<br />");
        mailBody.AppendFormat("<p> Nome completo: " + visitor.fullName + "<p>");
        mailBody.AppendFormat("<p> Telefone: " + visitor.phoneNumber + "<p>");
        mailBody.AppendFormat("<p> Nome da empresa: " + visitor.companyName + "<p>");
        mailBody.AppendFormat("<p> CNPJ da empresa: " + visitor.companyCNPJ + "<p>");
        mailBody.AppendFormat("<p> Ramo da atividade: " + visitor.ramoAtividade + "<p>");
        mailBody.AppendFormat("<p> Local: " + visitor.city.nome + "( " +  visitor.state.sigla + " )" + "<p>");
        mailBody.AppendFormat("<br/>");
        mailBody.AppendFormat("<p> Mensagem: " + visitor.message + "<p>");
        mailMessage.Body = mailBody.ToString();

        smtpClient.Send(mailMessage);

        return Created("Send message successfully", visitor);
    }

    
    
}