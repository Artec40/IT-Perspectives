using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace my_api
{
    [Table("project")]
    public class Project
    {
        [Column("project_id")]
        public int Id { get; set; }
        [Column("photo")]
        public string Photo { get; set; }
        [Column("name")]
        public string Name { get; set; }
        [Column("description")]
        public string Description { get; set; }
        [Column("technology_image")]
        public string TechnologyImage { get; set; }
        public IEnumerable<KillerFeature> KillerFeatures { get; set; }
        [Column("teammate_id")]
        public int TeammateId { get; set; }
        public Teammate Teammate { get; set; }

        public static void onModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Project>().HasKey(x => x.Id);
            modelBuilder.Entity<Project>().Property(x => x.Photo).IsRequired();
            modelBuilder.Entity<Project>().Property(x => x.Name).IsRequired();
            modelBuilder.Entity<Project>().Property(x => x.Description).IsRequired();
            modelBuilder.Entity<Project>().Property(x => x.TechnologyImage).IsRequired();

            modelBuilder.Entity<Project>().HasIndex(x => x.Name).IsUnique();
            modelBuilder.Entity<Project>().HasOne(x => x.Teammate).WithMany(b => b.Projects)
            .HasForeignKey(p => p.TeammateId);
        }
    }
}
