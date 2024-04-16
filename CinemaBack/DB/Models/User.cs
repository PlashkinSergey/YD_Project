using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CinemaBack.DB.Models
{
    public class User
    {
        [Key]
        [Column("UserID")]
        public Guid ID { get; set; } = Guid.Empty;

        [Column("Name")]
        public string Name { get; set; } = string.Empty;

        [Column("Password")]
        public string Password { get; set; } = string.Empty;

        [Column("Email")]
        public string Email { get; set; } = string.Empty;
        
        [Column("Type")]
        public string Type { get; set; } = string.Empty;
    }
}
