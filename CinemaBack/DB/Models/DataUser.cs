using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CinemaBack.DB.Models
{
    public class DataUser
    {
        [Key]
        [Column("DataUserID"), Required]
        public Guid Id { get; set; }

        [Column("UserID"), Required]
        public Guid UserId { get; set; }

        [Column("Phone")]
        public string Phone { get; set; }

        [Column("Inn")]
        public string Inn { get; set; } = string.Empty;

        [Column("PassportSeries")]
        public string PasSer { get; set; } = string.Empty;

        [Column("PassportNumber")]
        public string PasNum { get; set; } = string.Empty;
    }
}