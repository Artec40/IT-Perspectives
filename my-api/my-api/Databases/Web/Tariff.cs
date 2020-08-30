using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;


namespace my_api
{
    [Table("tarrif")]
    public class Tariff
    {
        [Column("id")]
        public int Id { get; set; }
        [Column("name")]
        public string Name { get; set; }
        [Column("short_description")]
        public string ShortDescription { get; set; }
        [Column("full_description")]
        public string FullDescription { get; set; }
        [Column("price")]
        public int Price { get; set; }

        public static void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Tariff>().HasKey(x => x.Id);
            modelBuilder.Entity<Tariff>().Property(x => x.Name).IsRequired();
            modelBuilder.Entity<Tariff>().Property(x => x.ShortDescription).IsRequired();
            modelBuilder.Entity<Tariff>().Property(x => x.FullDescription).IsRequired();
            modelBuilder.Entity<Tariff>().Property(x => x.Price).IsRequired();

            modelBuilder.Entity<Tariff>().HasIndex(x => x.Name).IsUnique();
        }
    }
}
