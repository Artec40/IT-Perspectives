﻿
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace my_api
{
    [Table("teammate")]
    public class Teammate
    {
        [Column("id")]
        public int Id { get; set; }
        [Column("photo")]
        public string Photo { get; set; }
        [Column("short_name")]
        public string ShortName { get; set; }
        [Column("full_name")]
        public string FullName { get; set; }
        [Column("company")]
        public string Company { get; set; }        
        [Column("location")]
        public string Location { get; set; }        
        [Column("website")]
        public string Website { get; set; }        
        [Column("phone")]
        public string Phone { get; set; }
        [Column("articles_count")]
        public int ArticlesCount { get; set; }
        [Column("personal_info")]
        public string PersonalInfo { get; set; }
        public IEnumerable<Article> Articles { get; set; }
        public IEnumerable<TeammateProject> TeammateProjects { get; set; }
        public Account Account { get; set; }
        public static void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Teammate>().HasKey(x => x.Id);
            modelBuilder.Entity<Teammate>().Property(x => x.Photo).IsRequired();
            modelBuilder.Entity<Teammate>().Property(x => x.ShortName).IsRequired();
            modelBuilder.Entity<Teammate>().Property(x => x.FullName).IsRequired();
            modelBuilder.Entity<Teammate>().Property(x => x.Company).IsRequired();
            modelBuilder.Entity<Teammate>().Property(x => x.Location).IsRequired();
            modelBuilder.Entity<Teammate>().Property(x => x.Website).IsRequired();
            modelBuilder.Entity<Teammate>().Property(x => x.Phone).IsRequired();
            modelBuilder.Entity<Teammate>().Property(x => x.ArticlesCount).IsRequired();
            modelBuilder.Entity<Teammate>().Property(x => x.PersonalInfo).IsRequired();

            modelBuilder.Entity<Teammate>().HasIndex(x => x.FullName).IsUnique();
        }
    }
}
