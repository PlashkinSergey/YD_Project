using CinemaBack.DB.Models;
using Microsoft.EntityFrameworkCore;

namespace CinemaBack.DB
{
    public class CinemaDBContext : DbContext
    {
        public CinemaDBContext(DbContextOptions<CinemaDBContext> optinal) : base(optinal) { }

        public DbSet<User> Users { get; set; }
    }
}
