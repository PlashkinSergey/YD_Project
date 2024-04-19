using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using CinemaBack.DB;
using CinemaBack.DB.Models;

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
            var user = await _context.User
                .FirstOrDefaultAsync(m => m.Id == id);
            return user;
        }

        [HttpGet("email={email}")]
        public async Task<User?> UserByEmail(string email)
        {
            var user = await _context.User
                .FirstOrDefaultAsync(m => m.Email == email);
            if (user == null)
            {
                return null;
            }
            return user;
        }


        [HttpPost]
        public async Task<User> Create(User user)
        {
            if (ModelState.IsValid)
            {
                user.Id = Guid.NewGuid();
                _context.User.Add(user);
                await _context.SaveChangesAsync();
                return user;
            }
            return user;
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
            return user;
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
