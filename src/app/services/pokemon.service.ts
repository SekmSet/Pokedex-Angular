import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Observable} from "rxjs";
import {PokemonListResponse} from "../modules/pokemon/views/view-all/view-all.component";
import {PokemonResponse} from "../modules/pokemon/detail/detail.component";

@Injectable({
  providedIn: 'root'
})

export class PokemonService {
  private _pokemonBaseUrl ='https://pokeapi.co/api/v2/'

  constructor(private _httpClient: HttpClient) {
  }

  /* GET POKEMON BY NAME*/
  getPokemon(name : string): Observable<PokemonResponse> {
    return this._httpClient.get<PokemonResponse>(`${this._pokemonBaseUrl}pokemon/${name}`);
  }

  /* GET ALL POKEMONS  */
  getPokemons():Observable<PokemonListResponse> {
    return this._httpClient.get<PokemonListResponse>(`${this._pokemonBaseUrl}pokemon?limit=1154`);
  }
}
