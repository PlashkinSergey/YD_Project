using CinemaBack.DB;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddDbContext<CinemaDBContext>(
    (options) => options.UseNpgsql(builder.Configuration.GetConnectionString("ServerPostgreSql")));
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(optional => optional
       .AllowAnyOrigin()
       .AllowAnyHeader()
       .AllowAnyMethod()
       .AllowCredentials()
       .WithOrigins("http://localhost:4200")
);

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
