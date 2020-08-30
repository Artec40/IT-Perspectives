using Microsoft.EntityFrameworkCore;

namespace my_api.Databases
{
    public class ITPerspectivesContext : DbContext
    {
        public ITPerspectivesContext(DbContextOptions options) : base(options)
        {
            Database.EnsureCreated();
        }

        public DbSet<Article> Articles { get; set; }
        public DbSet<KillerFeature> KillerFeatures { get; set; }
        public DbSet<Project> Projects { get; set; }
        public DbSet<Tariff> Tariffs { get; set; }
        public DbSet<Teammate> Teammates { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            Article.OnModelCreating(modelBuilder);
            KillerFeature.OnModelCreating(modelBuilder);
            Project.OnModelCreating(modelBuilder);
            Tariff.OnModelCreating(modelBuilder);
            Teammate.OnModelCreating(modelBuilder);
        }
    }
}
