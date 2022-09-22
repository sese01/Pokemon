import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { pokemonsService } from '../pokemonCards/service/pokemon.service';
import { Model } from './models/model';

@Component({
  selector: 'app-add-pokemons',
  templateUrl: './add-pokemons.component.html',
  styleUrls: ['./add-pokemons.component.scss'],
})
export class AddPokemonsComponent implements OnInit {
  data: any[] = [];

  closeResult = '';

  pokemons: Model[] = [];
  public show: boolean = false;

  constructor(
    private modalService: NgbModal,
    private pokemonService: pokemonsService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  pokemonsData: Model[] = [];
  onChangePokemon($event: any) {
    let id = $event.target.value;
    let isChecked = $event.target.checked;
    

    if (this.pokemonsData.length < 5) {
      if (isChecked == true) {
        this.pokemonsData.push(id);
        this.pokemonsData.sort();
      } else {
        this.pokemonsData.splice(this.pokemonsData.indexOf(id));
      }
    }else{
      alert('paila')
      isChecked = false;
    }
    console.info(this.pokemonsData);

  }
  open(content: any) {
    this.modalService.open(content, { size: 'xl' });
    let pokemonData;
    for (let i = 1; i <= 20; i++) {
      this.pokemonService.getPokemons(i).subscribe(
        (res) => {
          pokemonData = {
            position: i,
            image: res.sprites.front_default,
            name: res.name,
            abilities: res.abilities[0].ability.name,
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
