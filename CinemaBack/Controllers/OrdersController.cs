using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CinemaBack.DB;
using CinemaBack.DB.Models;

namespace CinemaBack.Controllers
{
    [ApiController, Route("api/[controller]")]
    public class OrdersController : Controller
    {
        private readonly CinemaDBContext _context;

        public OrdersController(CinemaDBContext context)
        {
            _context = context;
        }

        // GET: Orders
        [HttpGet]
        public async Task<List<Order>?> Index()
        {
            return await _context.Order.ToListAsync();
        }

        // GET: Orders/Details/5
        [HttpGet("{id:guid}")]
        public async Task<Order?> Details(Guid? id)
        {
            if (id == null)
            {
                return null;
            }

            var order = await _context.Order
                .FirstOrDefaultAsync(m => m.Id == id);
            return order != null ? order : null;
        }

        // POST: Orders/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        public async Task<Order?> Create(Order order)
        {
            if (ModelState.IsValid)
            {
                order.Id = Guid.NewGuid();
                _context.Add(order);
                await _context.SaveChangesAsync();
                return order;
            }
            return null;
        }

        // POST: Orders/Edit/5
        [HttpPut("{id:guid}")]
        public async Task<Order?> Edit(Guid id, Order order)
        {
            if (id != order.Id)
            {
                return null;
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(order);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!OrderExists(order.Id))
                    {
                        return null;
                    }
                    else
                    {
                        throw;
                    }
                }
                return order;
            }
            return null;
        }

        // POST: Orders/Delete/5
        [HttpDelete("{id:guid}")]
        public async Task<bool?> DeleteConfirmed(Guid id)
        {
            var order = await _context.Order.FindAsync(id);
            if (order != null)
            {
                _context.Order.Remove(order);
                await _context.SaveChangesAsync();
                return true;
            }
            return false;
        }

        private bool OrderExists(Guid id)
        {
            return _context.Order.Any(e => e.Id == id);
        }
    }
}
