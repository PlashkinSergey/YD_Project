using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CinemaBack.DB.Models
{
    public class User
    {
        [Key]
        [Column("UserID"), Required]
        public Guid Id { get; set; }

        [Column("Name"), Required]
        public string Name { get; set; }

        [Column("Password"), Required]
        public string Password { get; set; }

        [Column("Email"), Required]
        public string Email { get; set; }

        [Column("Type"), Required]
        public string Type { get; set; }
    }
}
