using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CinemaBack.DB;
using CinemaBack.DB.Models;

namespace CinemaBack.Controllers
{
    [ApiController, Route("api/[controller]")]
    public class HallsController : Controller
    {
        private readonly CinemaDBContext _context;

        public HallsController(CinemaDBContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<List<Hall>> Index()
        {
            return await _context.Hall.ToListAsync();
        }

        // GET: Halls/Details/5
        [HttpGet("{id:guid}")]
        public async Task<Hall?> Details(Guid? id)
        {
            if (id == null)
            {
                return null;
            }
            return await _context.Hall
                .FirstOrDefaultAsync(m => m.Id == id);
        }

        [HttpPost]
        public async Task<Hall?> Create(Hall hall)
        {
            if (ModelState.IsValid)
            {
                hall.Id = Guid.NewGuid();
                _context.Add(hall);
                await _context.SaveChangesAsync();
                return hall;
            }
            return null;
        }

        [HttpPut("{id:guid}")]
        public async Task<Boolean> Edit(Guid id, Hall hall)
        {
            if (id != hall.Id)
            {
                return false;
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(hall);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!HallExists(hall.Id))
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
        public async Task<Boolean> DeleteConfirmed(Guid id)
        {
            var hall = await _context.Hall.FindAsync(id);
            if (hall != null)
            {
                _context.Hall.Remove(hall);
                await _context.SaveChangesAsync();
                return true;
            }
            return false;
        }

        private bool HallExists(Guid id)
        {
            return _context.Hall.Any(e => e.Id == id);
        }
    }
}
