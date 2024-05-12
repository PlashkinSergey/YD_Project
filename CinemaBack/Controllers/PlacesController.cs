using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using CinemaBack.DB;
using CinemaBack.DB.Models;

namespace CinemaBack.Controllers
{
    [ApiController, Route("api/[controller]")]
    public class PlacesController : Controller
    {
        private readonly CinemaDBContext _context;

        public PlacesController(CinemaDBContext context)
        {
            _context = context;
        }

        // GET: Places
        [HttpGet]
        public async Task<List<Place>> Index()
        {
            var cinemaDBContext = _context.Place.Include(p => p.Hall);
            return await cinemaDBContext.ToListAsync();
        }

        // GET: Places/Details/5
        [HttpGet("{id:guid}")]
        public async Task<Place?> Details(Guid? id)
        {
            if (id == null)
            {
                return null;
            }

            return await _context.Place
                .Include(p => p.Hall)
                .FirstOrDefaultAsync(m => m.Id == id);
        }

        [HttpPost]
        public async Task<Place?> Create(Place place)
        {
            if (ModelState.IsValid)
            {
                place.Id = Guid.NewGuid();
                _context.Add(place);
                await _context.SaveChangesAsync();
                return place;
            }
            return null;
        }

        [HttpPut("{id:guid}")]
        public async Task<bool> Edit(Guid id, Place place)
        {
            if (id != place.Id)
            {
                return false;
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(place);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!PlaceExists(place.Id))
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
            var place = await _context.Place.FindAsync(id);
            if (place != null)
            {
                _context.Place.Remove(place);
                await _context.SaveChangesAsync();
                return true;
            }
            return false;
        }

        private bool PlaceExists(Guid id)
        {
            return _context.Place.Any(e => e.Id == id);
        }
    }
}
