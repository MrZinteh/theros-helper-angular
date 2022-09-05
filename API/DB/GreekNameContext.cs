using Microsoft.EntityFrameworkCore;
using API.Db.Models;

namespace API.Db;

public class GreekNameContext : DbContext
{
    public GreekNameContext(DbContextOptions<GreekNameContext> options) : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        var name = modelBuilder.Entity<Name>()
            .Property(n => n.name)
            .IsRequired();
        var lastname = modelBuilder.Entity<LastName>();
        var firstname = modelBuilder.Entity<FirstName>()
            .HasKey(f => new {f.name, f.gender});
    }

    public DbSet<Name> names { get; set; } = null!;

    public DbSet<FirstName> firstNames { get; set; } = null;
    public DbSet<LastName> lastnames { get; set; } = null!;
}