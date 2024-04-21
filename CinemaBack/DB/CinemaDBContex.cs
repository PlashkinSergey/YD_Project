using CinemaBack.DB.Models;
using Microsoft.EntityFrameworkCore;

namespace CinemaBack.DB
{
    public class CinemaDBContext : DbContext
    {
        public CinemaDBContext(DbContextOptions<CinemaDBContext> optinal) : base(optinal) { }

        public DbSet<User> User { get; set; }
        public DbSet<DataUser> DataUser { get; set; }
        public DbSet<Order> Order { get; set; }
        public DbSet<Ticket> Ticket { get; set; }
        public DbSet<Film> Film { get; set; }
        public DbSet<Distributor> Distributor { get; set; }
        public DbSet<Hall> Hall { get; set; }
        public DbSet<Seance> Seance { get; set; }
        public DbSet<Place> Place { get; set; }
        public DbSet<booked_tickets> booked_tickets { get; set; }
    }
}
