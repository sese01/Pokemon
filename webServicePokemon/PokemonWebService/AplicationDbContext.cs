using Microsoft.EntityFrameworkCore;
using PokemonWebService.Models;

namespace PokemonWebService
{
    public class AplicationDbContext: DbContext
    {
        public DbSet<Users> users { get; set; }


        public AplicationDbContext(DbContextOptions<AplicationDbContext> options) : base(options)
        { }
    }
}
