using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CinemaBack.DB;
using CinemaBack.DB.Models;
using System.Net.Sockets;

namespace CinemaBack.Controllers
{
    [ApiController, Route("api/[controller]")]
    public class TicketsController : Controller
    {
        private readonly CinemaDBContext _context;

        public TicketsController(CinemaDBContext context)
        {
            _context = context;
        }

        // GET: Tickets
        [HttpGet]
        public async Task<List<Ticket>> Index()
        {
            return await _context.Ticket.ToListAsync();
        }

        // GET: Tickets/Details/5
        [HttpGet("{id:guid}")]
        public async Task<Ticket> Details(Guid? id)
        {
            return await _context.Ticket
                .FirstOrDefaultAsync(m => m.Id == id);
        }

        [HttpGet("seanceId={seanceId:guid}")]
        public async Task<List<Ticket>> GetTicketsBySeanceId(Guid seanceId)
        {
            return await _context.Ticket
                .Where(t=> t.SeanceId == seanceId).ToListAsync();
        }


        // POST: Tickets/Create
        [HttpPost]
        public async Task<Ticket?> CreateTicket(Ticket ticket)
        {
            if (ModelState.IsValid)
            {
                ticket.Id = Guid.NewGuid();
                _context.Ticket.Add(ticket);
                await _context.SaveChangesAsync();
                return ticket;
            }
            return null;
        }

        [HttpPost("tickets")]
        public async Task<List<Ticket>?> CreateTickets(List<Ticket> tickets)
        {
            foreach (Ticket t in tickets)
            {
                t.Id = Guid.NewGuid();
               _context.Ticket.Add(t);
            }
            await _context.SaveChangesAsync();
            return tickets;
        }

        [HttpPut("{id:guid}")]
        public async Task<Boolean> Edit(Guid id, Ticket ticket)
        {
            if (id != ticket.Id)
            {
                return false;
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(ticket);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!TicketExists(ticket.Id))
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

        // POST: Tickets/Delete/5
        [HttpDelete("{id:guid}")]
        public async Task<Boolean> DeleteConfirmed(Guid id)
        {
            var ticket = await _context.Ticket.FindAsync(id);
            if (ticket != null)
            {
                _context.Ticket.Remove(ticket);
                await _context.SaveChangesAsync();
                return true;
            }
            return false;
        }

        private bool TicketExists(Guid id)
        {
            return _context.Ticket.Any(e => e.Id == id);
        }
    }
}
