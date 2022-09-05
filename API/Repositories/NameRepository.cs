using Microsoft.EntityFrameworkCore;
using API.Db;
using API.Db.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Repositories;

public interface INameRepository
{
    public Task<IEnumerable<Name>> GetAllNames();
    public Task<IEnumerable<FirstName>> GetFirstNames();
    public Task<IEnumerable<LastName>> GetLastNames();
    public Task<Name?> GetName(string name);
    public Task RemoveName(Name name);
    public Task AddName(Name name);
}

public class NameRepository : INameRepository
{
    private readonly GreekNameContext _context;

    public NameRepository(GreekNameContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Name>> GetAllNames()
    {
        return await _context.names
            .ToListAsync();
    }

    public async Task<IEnumerable<FirstName>> GetFirstNames()
    {
        return await _context.firstNames
            .ToListAsync();
    }

    public async Task<IEnumerable<LastName>> GetLastNames()
    {
        return await _context.lastnames
            .ToListAsync();
    }


    public async Task<Name?> GetName(string name)
    {
        return await _context.names.SingleOrDefaultAsync(n => n.name == name);
    }

    public async Task RemoveName(Name name)
    {
        _context.Remove(name);
        await _context.SaveChangesAsync();
    }

    public async Task AddName(Name name)
    {
        await _context.names.AddAsync(name);
        await _context.SaveChangesAsync();
    }
}