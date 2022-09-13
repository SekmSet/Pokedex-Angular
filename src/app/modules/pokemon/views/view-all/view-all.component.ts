import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {PokemonService} from "../../../../services/pokemon.service";

export interface PokemonListResponse {
  count: number;
  results: Pokemon[];
}

export interface Pokemon {
  name: string
  nameUppercase?: string
  url?: string
}

export interface PokemonOrederByName {
  name: string
  nameUpperCase?: string
  url?: string
}

@Component({
  selector: 'view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.scss']
})

export class ViewAllComponent implements OnInit {
  listPokemon ?: Pokemon[];
  pokemonCount ?: number;
  spinner : boolean = true;

  pokemonNameA ?: PokemonOrederByName[];

  /*
  * INJECTION  DE DEPENDANCE
  * INITIALISATION DES ATTRIBUTS
  *
  * HttpCLient
  * PokemonService
  * */
  constructor(private PokemonService : PokemonService) { }

  ngOnInit(): void {
    this.getAllPokemons()
  }

  getAllPokemons(): void {
    this.PokemonService.getPokemons().subscribe(PokemonListResponse => {
      this.pokemonCount = PokemonListResponse.count;
      this.listPokemon = PokemonListResponse.results.map(result =>({
        // result.sort(),
        name: result.name,
        nameUppercase: result.name.charAt(0).toUpperCase() + result.name.substring(1).toLowerCase(),
      }));
      this.spinner = false;
    });
  }
}
