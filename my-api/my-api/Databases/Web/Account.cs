
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace my_api
{
    [Table("account")]
    public class Account
    {
        [Column("teammate_id")]
        public int TeammateId { get; set; }
        [Column("id")]
        public int Id { get; set; }
        [Column("name")]
        public string Name { get; set; }
        [Column("password")]
        public string Password { get; set; }
        [Column("status")]
        public bool Status { get; set; }
        public Teammate Teammate { get; set; }

        public static void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Account>().HasKey(x => x.Id);
            modelBuilder.Entity<Account>().Property(x => x.Name).IsRequired();
            modelBuilder.Entity<Account>().Property(x => x.Password).IsRequired();
            modelBuilder.Entity<Account>().Property(x => x.Status).IsRequired();

            modelBuilder.Entity<Account>().HasOne(x => x.Teammate).WithOne(b => b.Account)
                        .HasForeignKey<Account>(p => p.TeammateId);
        }
    }
}
