using Microsoft.EntityFrameworkCore;
using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace my_api
{
    [Table("killer_feature")]
    public class KillerFeature
    {
        [Column("id_killer_feature")] public int Id { get; set; }
        [Column("name")] public string Name { get; set; }
        [Column("description")] public string Description { get; set; }
        [Column("image_link")] public string ImageLink { get; set; }
        [Column("id_project")] public int ProjectId { get; set; }
        public Project Project { get; set; }

        public static void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<KillerFeature>().HasKey(x => x.Id);
            modelBuilder.Entity<KillerFeature>().Property(x => x.Name).IsRequired();
            modelBuilder.Entity<KillerFeature>().Property(x => x.Description).IsRequired();
            modelBuilder.Entity<KillerFeature>().Property(x => x.ImageLink);
            modelBuilder.Entity<KillerFeature>().Property(x => x.ProjectId);

            modelBuilder.Entity<KillerFeature>().HasIndex(x => x.Name).IsUnique();

            modelBuilder.Entity<KillerFeature>().HasOne(x => x.Project).WithMany(b => b.KillerFeatures)
                .HasForeignKey(p => p.ProjectId);
        }
    }
}