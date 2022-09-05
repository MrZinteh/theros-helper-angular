using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using API.Db.Models;
using API.Repositories;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

[ApiController]
[Route("/greekNames")]
public class NameController : ControllerBase
{
    private readonly IMapper _mapper;
    private readonly INameRepository _nameRepository;

    public NameController(
        IMapper mapper,
        INameRepository nameRepository
        )
    {
        _mapper = mapper;
        _nameRepository = nameRepository;
    }
    
    [HttpGet]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<IEnumerable<Name>>> ListNames()
    {
        var names = await _nameRepository.GetAllNames();
        return Ok(_mapper.Map<IEnumerable<Name>>(names));
    }

    [HttpGet("firstnames")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<IEnumerable<Name>>> ListFirstNames()
    {
        var firstNames = await _nameRepository.GetFirstNames();
        return Ok(_mapper.Map<IEnumerable<FirstName>>(firstNames));
    }
    
    [HttpGet("lastnames")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<IEnumerable<LastName>>> ListLastNames()
    {
        var lastNames = await _nameRepository.GetLastNames();
        return Ok(_mapper.Map<IEnumerable<LastName>>(lastNames));
    }

    [HttpPost("")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<ActionResult> Add(Name newName)
    {
        var names = await _nameRepository.GetAllNames();
        if (names.Contains(newName))
        {
            return BadRequest();
        }
        await _nameRepository.AddName(newName);
        return Ok();
    }

    [HttpDelete("")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<ActionResult> Delete(string name)
    {
        var foundName = await _nameRepository.GetName(name);
        if (foundName == null)
        {
            return NotFound();
        }

        await _nameRepository.RemoveName(foundName);
        return Ok();
    }

    public record GreekName(
        string Name,
        string Meaning,
        string Gender,
        string Purpose,
        string Lastname,
        string Lastmeaning
    );

    // ReSharper disable once UnusedType.Global
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<Name, GreekName>();
        }
    }
}