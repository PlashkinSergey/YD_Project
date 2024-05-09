using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CinemaBack.DB.Models
{
    public class Order
    {
        [Key, Column("OrderId")]
        public Guid Id { get; set; }

        [Column("EmployeeId")]
        public Guid EmployeeId { get; set; }

        [Column("UserId")]
        public Guid UserId { get; set; }

        [Column("RegistrationDate"), Required]
        public string RegDate { get; set; }

        public virtual User Employee { get; set; }
        public virtual User User { get; set; }
    }
}
