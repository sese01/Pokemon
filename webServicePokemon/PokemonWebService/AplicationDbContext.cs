using Microsoft.EntityFrameworkCore;
using PokemonWebService.Models;

namespace PokemonWebService
{
    public class AplicationDbContext: DbContext
    {
        public DbSet<NewUsers> newUsers { get; set; }


        public AplicationDbContext(DbContextOptions<AplicationDbContext> options) : base(options)
        { }
    }
}
