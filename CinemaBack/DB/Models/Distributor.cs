using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CinemaBack.DB.Models
{
    public class Distributor
    {
        [Key, Column("DistributorId")]
        public Guid Id { get; set; }

        [Column("Company"), Required]
        public string? Company { get; set; }

        [Column("Country"), Required]
        public string? Country { get; set; }

        [Column("Site"), Required]
        public string? Site { get; set; }
    }
}
