using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CinemaBack.DB;
using CinemaBack.DB.Models;

namespace CinemaBack.Controllers
{
    [ApiController, Route("api/[controller]")]
    public class SeancesController : Controller
    {
        private readonly CinemaDBContext _context;

        private readonly List<string> typeList = new List<string>()
        {
            "Утренний", "Дневной", "Вечерний", "Ночной"
        };
        public SeancesController(CinemaDBContext context)
        {
            _context = context;
        }

        // GET: Seances
        [HttpGet]
        public async Task<List<Seance>> Index()
        {
            return await _context.Seance.ToListAsync();
        }

        [HttpGet("counts")]
        public async Task<List<int>> GetCountSeance()
        {
            List<int> countList = new List<int>();
            foreach (var type in this.typeList)
            {
                countList.Add(await _context.Seance.Where(s => s.Type == type).CountAsync());
            }
            return countList;
        }

        // GET: Seances/Details/5
        [HttpGet("{id:guid}")]
        public async Task<Seance?> Details(Guid? id)
        {
            if (id == null)
            {
                return null;
            }
            return await _context.Seance
                .FirstOrDefaultAsync(m => m.Id == id);
        }

        [HttpGet("filmId={filmId:guid}")]
        public async Task<List<Seance>> GetByFilmId(Guid filmId)
        {
            return await _context.Seance
                .Where(s => s.FilmId == filmId)
                .Select(s => s).ToListAsync();
        }

        [HttpPost]
        public async Task<Seance?> Create(Seance seance)
        {
            if (ModelState.IsValid)
            {
                seance.Id = Guid.NewGuid();
                _context.Add(seance);
                await _context.SaveChangesAsync();
                return seance;
            }
            return null;
        }

        [HttpPut("{id:guid}")]
        public async Task<Boolean> Edit(Guid id, Seance seance)
        {
            if (id != seance.Id)
            {
                return false;
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(seance);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!SeanceExists(seance.Id))
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
            var seance = await _context.Seance.FindAsync(id);
            if (seance != null)
            {
                _context.Seance.Remove(seance);
                await _context.SaveChangesAsync();
                return true;
            }
            return false;
        }

        private bool SeanceExists(Guid id)
        {
            return _context.Seance.Any(e => e.Id == id);
        }
    }
}
