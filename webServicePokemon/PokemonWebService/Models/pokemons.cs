using System.ComponentModel.DataAnnotations;

namespace PokemonWebService.Models
{
    public class pokemons
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Img { get; set; }
        [Required]
        public string AttackOne { get; set; }
        [Required]
        public string AttackTwo { get; set; }
    }
}
