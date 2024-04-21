using Microsoft.CodeAnalysis.Elfie.Serialization;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CinemaBack.DB.Models
{
    public class Seance
    {
        [Key, Column("SeanceId")]
        public Guid Id { get; set; }

        [Column("FilmId")]
        public Guid FilmId { get; set; }

        [Column("HallId")]
        public Guid HallId { get; set; }

        [Column("Type")]
        public string Type { get; set; }

        [Column("Price")]
        public string Price { get; set; }

        public virtual Film Film { get; set; }
        public virtual Hall Hall { get; set; }
    }
}
