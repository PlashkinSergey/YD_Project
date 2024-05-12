using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CinemaBack.DB;
using CinemaBack.DB.Models;

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
            var cinemaDBContext = _context.Ticket.Include(t => t.Seance);
            return await cinemaDBContext.ToListAsync();
        }

        // GET: Tickets/Details/5
        [HttpGet("{id:guid}")]
        public async Task<Ticket?> Details(Guid? id)
        {
            if (id == null)
            {
                return null;
            }
            return await _context.Ticket
                .Include(t => t.Seance)
                .FirstOrDefaultAsync(m => m.Id == id);
        }

        // POST: Tickets/Create
        [HttpPost]
        public async Task<Ticket?> Create(Ticket ticket)
        {
            if (ModelState.IsValid)
            {
                ticket.Id = Guid.NewGuid();
                _context.Add(ticket);
                await _context.SaveChangesAsync();
                return ticket;
            }
            return null;
        }

        // POST: Tickets/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPut("{id:guid}")]
        [ValidateAntiForgeryToken]
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
