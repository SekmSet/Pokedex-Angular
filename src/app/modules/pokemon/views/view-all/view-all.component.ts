import { Component, OnInit } from '@angular/core';

import { PokemonService } from '../../../../services/pokemon.service';
import { Pokemon } from '../../../../interfaces/pokemon';

@Component({
  selector: 'view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.scss'],
})
export class ViewAllComponent implements OnInit {
  listPokemon?: Pokemon[];
  pokemonCount?: number;
  spinner: boolean = true;

  /*
   * INJECTION  DE DEPENDANCE
   * INITIALISATION DES ATTRIBUTS
   *
   * HttpCLient
   * PokemonService
   * */
  constructor(private PokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getAllPokemons();
  }

  getAllPokemons(): void {
    this.PokemonService.getPokemons().subscribe((PokemonListResponse) => {
      this.pokemonCount = PokemonListResponse.count;
      this.listPokemon = PokemonListResponse.results.map((result) => ({
        // result.sort(),
        name: result.name,
      }));
      this.spinner = false;
    });
  }
}
