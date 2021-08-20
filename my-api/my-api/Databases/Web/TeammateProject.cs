using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace my_api
{
    [Table("teammate_projects")]
    public class TeammateProject
    {
        [Column("id")] public int Id { get; set; }
        [Column("project_id")] public int ProjectId { get; set; }
        [Column("teammate_id")] public int TeammateId { get; set; }
        private Teammate Teammate { get; set; }
        private Project Project { get; set; }

        public static void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<TeammateProject>().HasKey(x => x.Id);
            modelBuilder.Entity<TeammateProject>().HasOne(x => x.Teammate).WithMany(b => b.TeammateProjects)
                .HasForeignKey(p => p.TeammateId);
            modelBuilder.Entity<TeammateProject>().HasOne(x => x.Project).WithMany(b => b.TeammateProjects)
                .HasForeignKey(p => p.ProjectId);
        }
    }
}