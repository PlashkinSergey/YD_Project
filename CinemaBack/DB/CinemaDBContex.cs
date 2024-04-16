using CinemaBack.DB.Models;
using Microsoft.EntityFrameworkCore;

namespace CinemaBack.DB
{
    public class CinemaDBContext : DbContext
    {
        public CinemaDBContext(DbContextOptions<CinemaDBContext> optinal) : base(optinal) { }

        public DbSet<User> User { get; set; }
        public DbSet<DataUser> DataUser { get; set; }
    }
}
