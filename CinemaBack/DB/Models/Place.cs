using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CinemaBack.DB.Models
{
    public class Place
    {
        [Key, Column("PlaceId")]
        public Guid Id { get; set; }

        [Column("HallId"), Required]
        public Guid? HallId { get; set; }

        [Column("Row"), Required]
        public int? Row { get; set; }

        [Column("Position"), Required]
        public int? Position { get; set; }
    }
}
