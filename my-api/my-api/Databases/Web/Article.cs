using Microsoft.EntityFrameworkCore;
using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace my_api
{
    [Table("article")]
    public class Article
    {
        [Column("article_id")] public int Id { get; set; }
        [Column("image_link")] public string ImageLink { get; set; }
        [Column("title")] public string Title { get; set; }
        [Column("description")] public string Description { get; set; }
        [Column("date")] public DateTime Date { get; set; }
        [Column("teammate_id")] public int TeammateId { get; set; }

        public Teammate Teammate { get; set; }

        public static void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Article>().HasKey(x => x.Id);
            modelBuilder.Entity<Article>().Property(x => x.ImageLink).IsRequired();
            modelBuilder.Entity<Article>().Property(x => x.Title).IsRequired();
            modelBuilder.Entity<Article>().Property(x => x.Description).IsRequired();
            modelBuilder.Entity<Article>().Property(x => x.Date).IsRequired();

            modelBuilder.Entity<Article>().HasIndex(x => x.Title).IsUnique();

            modelBuilder.Entity<Article>().HasOne(x => x.Teammate).WithMany(b => b.Articles)
                .HasForeignKey(p => p.TeammateId);
        }
    }
}