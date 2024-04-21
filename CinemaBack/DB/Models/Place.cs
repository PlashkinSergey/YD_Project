using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CinemaBack.DB.Models
{
    public class Place
    {
        [Key, Column("PlaceId")]
        public Guid Id { get; set; }

        [Column("HallId")]
        public Guid HallId { get; set; }

        [Column("Row")]
        public int Row { get; set; }

        [Column("Position")]
        public int Position { get; set; }

        public virtual Hall Hall { get; set; }
    }
}
