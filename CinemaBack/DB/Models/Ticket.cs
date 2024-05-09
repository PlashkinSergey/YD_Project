using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CinemaBack.DB.Models
{
    public class Ticket
    {
        [Key, Column("TicketId")]
        public Guid Id { get; set; }

        [Column("SeanceId"), Required]
        public Guid SeanceId { get; set; }

        [Column("Row"), Required]
        public int Row { get; set; }

        [Column("Place"), Required]
        public int Place { get; set; }

        public virtual Seance Seance { get; set; }
    }
}
