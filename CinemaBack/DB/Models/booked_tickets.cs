using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CinemaBack.DB.Models
{
    public class booked_tickets
    {
        [Key, Column("Id")]
        public Guid Id { get; set; }

        [Required, Column("OrderId")]
        public Guid OrderId { get; set; }

        [Required, Column("TicketId")]
        public Guid TicketId { get; set; }
    }
}
