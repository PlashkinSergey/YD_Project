using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CinemaBack.DB;
using CinemaBack.DB.Models;

namespace CinemaBack.Controllers
{
    [ApiController, Route("api/[controller]")]
    public class DistributorsController : Controller
    {
        private readonly CinemaDBContext _context;

        public DistributorsController(CinemaDBContext context)
        {
            _context = context;
        }

        // GET: Distributors
        [HttpGet]
        public async Task<List<Distributor>?> GetAll()
        {
            return await _context.Distributor.ToListAsync();
        }

        // GET: Distributors/Details/5
        [HttpGet("{id:guid}")]
        public async Task<Distributor?> GetById(Guid? id)
        {
            if (id == null)
            {
                return null;
            }
            return await _context.Distributor
                .FirstOrDefaultAsync(m => m.Id == id); ;
        }

        // POST: Distributors/Create
        [HttpPost]
        public async Task<Distributor?> Create(Distributor distributor)
        {
            if (ModelState.IsValid)
            {
                distributor.Id = Guid.NewGuid();
                _context.Add(distributor);
                await _context.SaveChangesAsync();
                return distributor;
            }
            return null;
        }

        // POST: Distributors/Edit/5
        [HttpPut("{id:guid}")]
        public async Task<Distributor?> Edit(Guid id, [Bind("Id,Company,Country,Site")] Distributor distributor)
        {
            if (id != distributor.Id)
            {
                return null;
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(distributor);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!DistributorExists(distributor.Id))
                    {
                        return null;
                    }
                    else
                    {
                        throw;
                    }
                }
                return distributor;
            }
            return null;
        }

        [HttpDelete("{id:guid}")]
        public async Task<bool?> DeleteConfirmed(Guid id)
        {
            var distributor = await _context.Distributor.FindAsync(id);
            if (distributor != null)
            {
                _context.Distributor.Remove(distributor);
                await _context.SaveChangesAsync();
                return true;
            }
            return false;
        }

        private bool DistributorExists(Guid id)
        {
            return _context.Distributor.Any(e => e.Id == id);
        }
    }
}
