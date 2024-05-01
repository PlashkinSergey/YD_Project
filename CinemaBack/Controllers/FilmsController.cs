﻿using System;
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
    public class FilmsController : Controller
    {
        private readonly CinemaDBContext _context;

        public FilmsController(CinemaDBContext context)
        {
            _context = context;
        }

        // GET: Films
        [HttpGet]
        public async Task<List<Film>?> GetAllFilm()
        {
            var cinemaDBContext = _context.Film.Include(f => f.Distributor);
            return await cinemaDBContext.ToListAsync();
        }

        // GET: Films/Details/5
        [HttpGet("{id:guid}")]
        public async Task<Film?> Details(Guid? id)
        {
            if (id == null)
            {
                return null;
            }

            var film = await _context.Film
                .Include(f => f.Distributor)
                .FirstOrDefaultAsync(m => m.Id == id);

            return film != null ? film : null;
        }

        // GET: Films/Create

        //public IActionResult Create()
        //{
        //    ViewData["DistributorId"] = new SelectList(_context.Distributor, "Id", "Id");
        //    return View();
        //}

        // POST: Films/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        public async Task<Film?> Create(Film film)
        {
            if (ModelState.IsValid)
            {
                film.Id = Guid.NewGuid();
                _context.Add(film);
                await _context.SaveChangesAsync();
                return film;
            }
            return null;
        }
        // POST: Films/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPut("{id:guid}")]
        public async Task<Film?> Edit(Guid id, [Bind("Id,DistributorId,Name,Duration,Genre,Director")] Film film)
        {
            if (id != film.Id)
            {
                return null;
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(film);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!FilmExists(film.Id))
                    {
                        return null;
                    }
                    else
                    {
                        throw;
                    }
                }
                return film;
            }
            return film;
        }

        // POST: Films/Delete/5
        [HttpDelete("{id:guid}")]
        public async Task<bool?> DeleteConfirmed(Guid id)
        {
            var film = await _context.Film.FindAsync(id);
            if (film != null)
            {
                _context.Film.Remove(film);
                await _context.SaveChangesAsync();
                return true;
            }
            return false;
        }

        private bool FilmExists(Guid id)
        {
            return _context.Film.Any(e => e.Id == id);
        }
    }
}