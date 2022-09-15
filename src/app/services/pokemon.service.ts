import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { PokemonListResponse, PokemonResponse } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private _httpClient: HttpClient) {}

  /* GET POKEMON BY NAME*/
  getPokemon(name: string): Observable<PokemonResponse> {
    return this._httpClient.get<PokemonResponse>(
      `${environment.pokemonBaseUrl}pokemon/${name}`
    );
  }

  /* GET ALL POKEMONS  */
  getPokemons(): Observable<PokemonListResponse> {
    return this._httpClient.get<PokemonListResponse>(
      `${environment.pokemonBaseUrl}pokemon?limit=1154`
    );
  }
}
