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

        [Column("NameFiln")]
        public string Name { get; set; }

        [Column("Duration")]
        public string Duration { get; set; }

        [Column("Genre")]
        public string Genre { get; set; }

        [Column("Director")]
        public string Director { get; set; }

        public virtual Distributor Distributor { get; set; }
    }
}
