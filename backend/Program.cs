using Microsoft.EntityFrameworkCore;
using System.Text.Json;
using backend.Infrastructure;
using System.Text.Json.Serialization;
using backend.Domain;
using backend.Infrastructure.Repositories;

var builder = WebApplication.CreateBuilder(args);


// Add services to the container.
builder.Services.AddControllersWithViews();

// Add services to http context
builder.Services.AddHttpContextAccessor();


builder.Services.AddDbContext<AppDbContext>(options =>
{
    options.UseSqlite(builder.Configuration.GetConnectionString("DbConnection"));

});

builder.Services.AddControllers().AddJsonOptions(options =>
{
    // serialize enums as strings in api responses (e.g. Role)
    options.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());
    options.JsonSerializerOptions.ReferenceHandler = System.Text.Json.Serialization.ReferenceHandler.IgnoreCycles;
    options.JsonSerializerOptions.WriteIndented = true;
});


builder.Services.AddAutoMapper(typeof(DomainToDTOMappingProfile));


builder.Services.AddScoped<IProductRepository, ProductRepository>();
builder.Services.AddScoped<IProductService, ProductService>();
builder.Services.AddScoped<IContainerRepository, ContainerRepository>();
builder.Services.AddScoped<IContainerService, ContainerService>();
builder.Services.AddScoped<IPortStateRepository, PortStateRepository>();
builder.Services.AddScoped<IPortStateService, PortStateService>();
builder.Services.AddScoped<IPortMarkerRepository, PortMarkerRepository>();
builder.Services.AddScoped<IPortMarkerService, PortMarkerService>();




builder.Services.AddCors(
    c => c.AddPolicy("AllowAll",  policy => policy.AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader())
);


var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.UseCors("AllowAll");


app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
