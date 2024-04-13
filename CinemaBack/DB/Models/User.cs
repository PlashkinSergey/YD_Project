using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CinemaBack.DB.Models
{
    public class User
    {
        [Key]
        [Column("UserID")]
        public Guid ID { get; set; }

        [Column("Name")]
        public string Name { get; set; }

        [Column("Password")]
        public string Password { get; set; }


    }
}
