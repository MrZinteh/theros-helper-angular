using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace API.Db;

// ReSharper disable once UnusedType.Global, used by EFCore
public class GreekNameContextFactory : IDesignTimeDbContextFactory<GreekNameContext>
{
    public GreekNameContextFactory()
    {
        // A parameter-less constructor is required by the EF Core CLI tools.
    }

    public GreekNameContext CreateDbContext(string[] args)
    {
        var connectionString = "postgres://yaayqvhkxyshul:e95b506443202bd05ff40ed31337f40f3407b1501a3e02eee832fe38f7dcd602@ec2-52-31-217-108.eu-west-1.compute.amazonaws.com:5432/d2pma75ao4n73m";
        if (string.IsNullOrEmpty(connectionString))
            throw new InvalidOperationException("The connection string was not set " +
                                                "in the 'EFCORETOOLSDB' environment variable.");

        var options = new DbContextOptionsBuilder<GreekNameContext>()
            .UseNpgsql(connectionString)
            .Options;
        return new GreekNameContext(options);
    }
}