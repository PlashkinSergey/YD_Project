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

        [Column("FilmId"), Required]
        public Guid? FilmId { get; set; }

        [Column("HallId"), Required]
        public Guid? HallId { get; set; }

        [Column("Date"), Required]
        public string? Date { get; set; }

        [Column("Time"), Required]
        public string? Time { get; set; }

        [Column("Type"), Required]
        public string? Type { get; set; }

        [Column("Price"), Required]
        public string? Price { get; set; }
    }
}
