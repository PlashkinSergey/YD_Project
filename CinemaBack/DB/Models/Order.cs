using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CinemaBack.DB.Models
{
    public class Order
    {
        [Key, Column("OrderId")]
        public Guid Id { get; set; }

        [Column("EmployeeId"), Required]
        public Guid? EmployeeId { get; set; }

        [Column("UserId"), Required]
        public Guid? UserId { get; set; }

        [Column("RegistrationDate"), Required]
        public string? RegDate { get; set; }
    }
}
