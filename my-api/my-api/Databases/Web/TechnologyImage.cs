using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace my_api
{
    [Table("technology_images")]
    public class TechnologyImage
    {        
        [Column("technology_image_id")]
        public int Id { get; set; }
        
        [Column("technology_image")]
        public string TechnologyImagePath { get; set; }
        
        [Column("project_id")]
        public int ProjectId { get; set; }        
        private Project Project { get; set; }
        public static void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<TechnologyImage>().HasKey(x => x.Id);
            modelBuilder.Entity<TechnologyImage>().Property(x => x.TechnologyImagePath).IsRequired();
            modelBuilder.Entity<TechnologyImage>().HasOne(x => x.Project).WithMany(b => b.TechnologyImages)
            .HasForeignKey(p => p.ProjectId);
        }
    }
}
