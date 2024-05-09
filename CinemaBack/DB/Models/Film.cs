using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CinemaBack.DB.Models
{
    public class Film
    {
        [Key, Column("FilmId")]
        public Guid Id { get; set; }

        [Column("DistributorId")]
        public Guid DistributorId { get; set; }

        [Column("NameFilm"), Required]
        public string Name { get; set; }

        [Column("Duration"), Required]
        public string Duration { get; set; }

        [Column("Genre"), Required]
        public string Genre { get; set; }

        [Column("Director"), Required]
        public string Director { get; set; }

        public virtual Distributor Distributor { get; set; }
    }
}
