namespace PokemonWebService.Models
{
    public class Login
    {
        public  int? id { get; set; }
        public string email { get; set; }
        public string password { get; set; }
        public string? token { get; set; }

    }
}
