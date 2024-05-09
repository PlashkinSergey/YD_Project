using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CinemaBack.DB.Models
{
    public class Hall
    {
        [Key, Column("HallId")]
        public Guid Id { get; set; }

        [Column("NumberHall")]
        public int NumberHall { get; set; }

        public virtual ICollection<Place> Places { get; set; }

        public virtual ICollection<Seance> Seances { get; set; }
    }
}
