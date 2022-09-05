using System.Text.Json.Serialization;
using API.Db;
using API.Repositories;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
builder.Services.AddControllers()
    .AddJsonOptions(options =>
    {
        options.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());
        options.JsonSerializerOptions.DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull;
    });

builder.Services.AddDbContext<GreekNameContext>(options =>
{
    options.UseNpgsql("Host=ec2-52-31-217-108.eu-west-1.compute.amazonaws.com;Database=d2pma75ao4n73m;Username=yaayqvhkxyshul;Password=e95b506443202bd05ff40ed31337f40f3407b1501a3e02eee832fe38f7dcd602");
});

// Repositories and services
builder.Services.AddTransient<INameRepository, NameRepository>();

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