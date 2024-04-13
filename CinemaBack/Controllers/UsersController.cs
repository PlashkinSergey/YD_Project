using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CinemaBack.DB;
using CinemaBack.DB.Models;

namespace CinemaBack.Controllers
{
    [ApiController]
    [Route("back/[controller]")]
    public class UsersController : Controller
    {
        private readonly CinemaDBContext _context;

        public UsersController(CinemaDBContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> Index()
        {
            return View(await _context.Users.ToListAsync());
        }

        // GET: Users/Details/5
       // public async Task<IActionResult> Details(Guid? id)
       // {
       //     if (id == null)
       //     {
       //         return NotFound();
       //     }

       //     var user = await _context.Users
       //         .FirstOrDefaultAsync(m => m.ID == id);
       //     if (user == null)
       //     {
       //         return NotFound();
       //     }

       //     return View(user);
       // }

       // GET: Users/Create
       // public IActionResult Create()
       // {
       //     return View();
       // }

       // POST: Users/Create
       // To protect from overposting attacks, enable the specific properties you want to bind to.
       // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.

       //[HttpPost]
       // [ValidateAntiForgeryToken]
       // public async Task<IActionResult> Create([Bind("ID,Name")] User user)
       // {
       //     if (ModelState.IsValid)
       //     {
       //         user.ID = Guid.NewGuid();
       //         _context.Add(user);
       //         await _context.SaveChangesAsync();
       //         return RedirectToAction(nameof(Index));
       //     }
       //     return View(user);
       // }

       // GET: Users/Edit/5
       // public async Task<IActionResult> Edit(Guid? id)
       // {
       //     if (id == null)
       //     {
       //         return NotFound();
       //     }

       //     var user = await _context.Users.FindAsync(id);
       //     if (user == null)
       //     {
       //         return NotFound();
       //     }
       //     return View(user);
       // }

       // POST: Users/Edit/5
       //  To protect from overposting attacks, enable the specific properties you want to bind to.
       //  For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
       // [HttpPost]
       // [ValidateAntiForgeryToken]
       // public async Task<IActionResult> Edit(Guid id, [Bind("ID,Name")] User user)
       // {
       //     if (id != user.ID)
       //     {
       //         return NotFound();
       //     }

       //     if (ModelState.IsValid)
       //     {
       //         try
       //         {
       //             _context.Update(user);
       //             await _context.SaveChangesAsync();
       //         }
       //         catch (DbUpdateConcurrencyException)
       //         {
       //             if (!UserExists(user.ID))
       //             {
       //                 return NotFound();
       //             }
       //             else
       //             {
       //                 throw;
       //             }
       //         }
       //         return RedirectToAction(nameof(Index));
       //     }
       //     return View(user);
       // }

       // GET: Users/Delete/5
       // public async Task<IActionResult> Delete(Guid? id)
       // {
       //     if (id == null)
       //     {
       //         return NotFound();
       //     }

       //     var user = await _context.Users
       //         .FirstOrDefaultAsync(m => m.ID == id);
       //     if (user == null)
       //     {
       //         return NotFound();
       //     }

       //     return View(user);
       // }

       // POST: Users/Delete/5
       // [HttpPost, ActionName("Delete")]
       // [ValidateAntiForgeryToken]
       // public async Task<IActionResult> DeleteConfirmed(Guid id)
       // {
       //     var user = await _context.Users.FindAsync(id);
       //     if (user != null)
       //     {
       //         _context.Users.Remove(user);
       //     }

       //     await _context.SaveChangesAsync();
       //     return RedirectToAction(nameof(Index));
       // }

       // private bool UserExists(Guid id)
       // {
       //     return _context.Users.Any(e => e.ID == id);
       // }
    }
}
