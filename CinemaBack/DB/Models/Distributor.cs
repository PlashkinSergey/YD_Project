using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CinemaBack.DB.Models
{
    public class Distributor
    {
        [Key, Column("DistributorId")]
        public Guid Id { get; set; }

        [Column("Company")]
        public string Company { get; set; }

        [Column("Country")]
        public string Country { get; set; }

        [Column("Site")]
        public string Site { get; set; }
    }
}
