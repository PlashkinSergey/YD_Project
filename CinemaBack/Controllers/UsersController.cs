using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CinemaBack.DB;
using CinemaBack.DB.Models;
using CinemaBack.Hash;

namespace CinemaBack.Controllers
{
    [ApiController, Route("api/[controller]")]
    public class UsersController : Controller
    {
        private readonly CinemaDBContext _context;

        public UsersController(CinemaDBContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<List<User>?> Index()
        {
            return await _context.User.ToListAsync();
        }

        [HttpGet("{id:guid}")]
        public async Task<User?> UserById(Guid? id)
        {
            if (id == null)
            {
                return null;
            }
            return await _context.User
                .FirstOrDefaultAsync(m => m.Id == id);
        }

        [HttpGet("email={email}")]
        public async Task<User?> UserByEmail(string email)
        {
            return await _context.User
                .FirstOrDefaultAsync(m => m.Email == email);
        }

        [HttpGet("type={type}")]
        public async Task<List<User>> UserByType(string type)
        {
            return await _context.User
                .Where(u => u.Type == type)
                .Select(u => u).ToListAsync();
        }

        [HttpGet("email={email}/password={password}")]
        public async Task<User?> UserByEmailandPassword(string email, string password)
        {
            var hash = new Hasher(password).GetHash();
            return await _context.User
                .FirstOrDefaultAsync(m => m.Email == email && m.Password == hash);
        }

        [HttpGet("name={name}")]
        public async Task<User?> UserByName(string name)
        {
            return await _context.User
                .FirstOrDefaultAsync(m => m.Name == name);
        }

        [HttpPost]
        public async Task<User?> Create(User user)
        {
            if (ModelState.IsValid)
            {
                var hasher = new Hasher(user.Password);
                user.Id = Guid.NewGuid();
                user.Password = hasher.GetHash();
                _context.User.Add(user);
                await _context.SaveChangesAsync();
                return user;
            }
            return null;
        }

        [HttpPut("{id:guid}")]
        public async Task<User?> Edit(Guid id, User user)
        {
            if (id != user.Id)
            {
                return null;
            }
            if (ModelState.IsValid)
            {
                try
                {
                    var hash = new Hasher(user.Password).GetHash();
                    if (user.Password != hash)
                    {
                        user.Password = hash;
                    }
                    _context.User.Update(user);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!UserExists(user.Id))
                    {
                        return user;
                    }
                    else
                    {
                        throw;
                    }
                }
                return user;
            }
            return null;
        }

        [HttpDelete("{id:guid}")]
        public async Task<User?> DeleteConfirmed(Guid id)
        {
            var user = await _context.User.FindAsync(id);
            if (user != null)
            {
                var du = await _context.DataUser.FirstOrDefaultAsync((x) => x.UserId == id);
                if (du != null)
                {
                    _context.DataUser.Remove(du);
                }
                _context.User.Remove(user);
            }
            await _context.SaveChangesAsync();
            return user;
        }

        private bool UserExists(Guid id)
        {
            return _context.User.Any(e => e.Id == id);
        }
    }
}
