import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { pokemonsService } from '../pokemonCards/service/pokemon.service';

@Component({
  selector: 'app-add-pokemons',
  templateUrl: './add-pokemons.component.html',
  styleUrls: ['./add-pokemons.component.scss'],
})
export class AddPokemonsComponent implements OnInit{
  data: any[] = [];

  pokemons = [];

  closeResult = '';

  constructor(
    private modalService: NgbModal,
    private pokemonService: pokemonsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getPokemons();
  }
  getPokemons() {
    let pokemonData;

    for (let i = 1; i <= 1150; i++) {
      this.pokemonService.getPokemons(i).subscribe(
        (res) => {
          pokemonData = {
            position: i,
            image: res.sprites.front_default,
            name: res.name,
            desciption: res.desciption,
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


  open(content: any) {
    this.modalService.open(content,{size: 'xl'});
    
  }
}
