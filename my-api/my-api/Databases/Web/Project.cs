using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Common;

namespace my_api
{
    [Table("project")]
    public class Project
    {
        [Column("project_id")] public int Id { get; set; }
        [Column("photo")] public string Photo { get; set; }
        [Column("name")] public string Name { get; set; }
        [Column("description")] public string Description { get; set; }
        public IEnumerable<KillerFeature> KillerFeatures { get; set; }
        public IEnumerable<TeammateProject> TeammateProjects { get; set; }
        public IEnumerable<TechnologyImage> TechnologyImages { get; set; }

        public static void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Project>().HasKey(x => x.Id);
            modelBuilder.Entity<Project>().Property(x => x.Photo).IsRequired();
            modelBuilder.Entity<Project>().Property(x => x.Name).IsRequired();
            modelBuilder.Entity<Project>().Property(x => x.Description).IsRequired();
            modelBuilder.Entity<Project>().HasIndex(x => x.Name).IsUnique();
        }
    }
}