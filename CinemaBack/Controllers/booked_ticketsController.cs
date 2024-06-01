using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CinemaBack.DB;
using CinemaBack.DB.Models;

namespace CinemaBack.Controllers
{
    [ApiController, Route("api/[controller]")]
    public class booked_ticketsController : Controller
    {
        private readonly CinemaDBContext _context;

        public booked_ticketsController(CinemaDBContext context)
        {
            _context = context;
        }

        // GET: booked_tickets
        [HttpGet]
        public async Task<List<booked_tickets>> Index()
        {
            var cinemaDBContext = _context.booked_tickets;
            return await cinemaDBContext.ToListAsync();
        }

        // GET: booked_tickets/Details/5
        [HttpGet("{id:guid}")]
        public async Task<booked_tickets?> GetByIdOrder(Guid? id)
        {
            if (id == null)
            {
                return null;
            }

            return await _context.booked_tickets
                .FirstOrDefaultAsync(m => m.OrderId == id);
        }

        [HttpPost("order={idOrder:guid}/ticket={idTicket:guid}")]
        public async Task<booked_tickets?> CreateByIds(Guid idOrder, Guid idTicket, booked_tickets booked_ticket)
        {
            if (ModelState.IsValid)
            {
                booked_ticket.Id = Guid.NewGuid();
                booked_ticket.OrderId = idOrder;
                booked_ticket.TicketId = idTicket;
                _context.booked_tickets.Add(booked_ticket);
                await _context.SaveChangesAsync();
                return booked_ticket;
            }
            return null;
        }

        [HttpPut("{id:guid}")]
        public async Task<Boolean> Edit(Guid id, booked_tickets booked_tickets)
        {
            if (id != booked_tickets.Id)
            {
                return false;
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(booked_tickets);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!booked_ticketsExists(booked_tickets.Id))
                    {
                        return false;
                    }
                    else
                    {
                        throw;
                    }
                }
                return true;
            }
            return true;
        }
        
        [HttpDelete("{id:guid}")]
        public async Task<bool> DeleteConfirmed(Guid id)
        {
            var booked_tickets = await _context.booked_tickets.FindAsync(id);
            if (booked_tickets != null)
            {
                _context.booked_tickets.Remove(booked_tickets);
                await _context.SaveChangesAsync();
                return true;
            }
            return false;
        }

        private bool booked_ticketsExists(Guid id)
        {
            return _context.booked_tickets.Any(e => e.Id == id);
        }
    }
}
