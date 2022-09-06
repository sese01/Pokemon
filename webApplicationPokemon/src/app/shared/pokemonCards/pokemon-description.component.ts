import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { pokemonsService } from './service/pokemon.service';

@Component({
  selector: 'app-pokemon-description',
  templateUrl: './pokemon-description.component.html',
  styleUrls: ['./pokemon-description.component.scss'],
})
export class PokemonDescriptionComponent implements OnInit {
  // displayedColumns: string[] = ['position', 'image', 'name'];
   data: any[] = [];
   
  pokemons = [];

  constructor(
    private pokemonService: pokemonsService,
    private router: Router
  ) {}

  ngOnInit(): void {
     this.getPokemons();
  }

  getPokemons() {
    let pokemonData;

    for (let i = 1; i <= 5; i++) {
      this.pokemonService.getPokemons(i).subscribe(
        (res) => {
          pokemonData = {
            position: i,
            image: res.sprites.front_default,
            name: res.name,
          };
          //ponemos la data que viene del servicio en un arreglo
          this.data.push(pokemonData);

          
        },
        (err) => {
          console.log(err);
        }
      );
    }
    
  }
}
