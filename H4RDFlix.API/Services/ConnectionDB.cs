using H4RDFlix.API.DB.Models;
using Simple.Sqlite;
using Simple.Sqlite.Extension;
using System.Reflection;

namespace H4RDFlix.API.Services
{
    public class ConnectionDB
    {
        public ConnectionDB(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }
        public void ConfigureServices(IServiceCollection services)
        {
            var rootPath = Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location);
            var dbFile = Configuration.GetConnectionString("Default");
            services.AddSingleton(ConnectionFactory.FromFile(Path.Combine(rootPath, dbFile)));

            services.AddControllers()
                    .AddNewtonsoftJson();
        }
        private void setupDatabase(IServiceProvider applicationServices)
        {
            var fac = applicationServices.GetService<ConnectionFactory>();
            fac.GetConnection()
              .CreateTables()
              .Add<Teste>()
              .Commit();
        }
    }
}
