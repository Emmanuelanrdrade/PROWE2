using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Backend.core.Interfaces;
using Backend.Infraestructur.Data;
using Backend.Infraestructur.Repositorio;


var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<EmpresaLecheContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("EmpresaLecheContext")));

// Add services to the container.
// builder.Services.AddScoped<IEstudianteRepositorio, EstudianteRepositorio>();
builder.Services.AddScoped<IEmpleadoRepositorio, EmpleadoRepositorio>();
builder.Services.AddScoped<IProductoRepositorio, ProductoRepositorio>();
builder.Services.AddScoped<INotificacionesRepositorio, NotificacionRepositorio>();
builder.Services.AddScoped<IPublicidadRepositorio, PublicidadRepositorio>();

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();

