using Microsoft.AspNetCore.Mvc;
using Microsoft.DotNet.Scaffolding.Shared.Messaging;
using Microsoft.EntityFrameworkCore;
using PokemonWebService.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace PokemonWebService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class User : ControllerBase
    {
        private readonly AplicationDbContext _context;

        public User(AplicationDbContext context) {
            _context = context;
        }
        // GET: api/<NewUser>
        [HttpGet]
        public async Task<IActionResult> Get(){
            try
            {
                var listUsers = await _context.newUsers.ToArrayAsync();
                return Ok(listUsers);
            }
            catch (Exception)
            {

                throw;
            }
        }

        // GET api/<NewUser>/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            try
            {
                var newUsers = await _context.newUsers.FindAsync(id);
                if (newUsers == null) 
                { 
                return NotFound();
                }

                return Ok(newUsers);
            }
            catch (Exception)
            {

                throw;
            }
        }

        // POST api/<NewUser>
        [HttpPost("createUser")]
        public async Task<IActionResult> Post([FromBody] NewUsers newUsers)
        {
            try
            {
                _context.Add(newUsers);
                await _context.SaveChangesAsync();  

                return Ok(newUsers);

            }
            catch (Exception ex)
            {

                return BadRequest("chupame la verga");
            }
        }
        [HttpPost("userLogin")]
        public IActionResult Login(Login user) 
        {
            var userAvaible = _context.newUsers.Where(u => u.email == user.email && u.password == user.password).FirstOrDefault();
            if (userAvaible != null)
            {
                return Ok("realizado");
            }
            else 
            { 
            return Ok("paila");
            }

        }

        // PUT api/<NewUser>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] NewUsers newUsers)
        {
            try
            {
                if (id != newUsers.Id)
                {
                    return BadRequest();

                }
                _context.Update(newUsers);
                await _context.SaveChangesAsync();
                return Ok(new { Message="usuario actualizado"});

            }
            catch (Exception)
            {

                throw;
            }
        }

        // DELETE api/<NewUser>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
