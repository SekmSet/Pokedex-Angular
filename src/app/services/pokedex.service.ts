import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokedexService {
  pokemons$: BehaviorSubject<string[]>;

  constructor() {
    this.pokemons$ = new BehaviorSubject<string[]>([]);
  }

  private setPokemons(pokemons: string[]) {
    this.pokemons$.next(pokemons);
  }

  add(pokemonName: string) {
    const tmp = [...this.pokemons$.value, pokemonName];
    this.setPokemons(tmp);
  }

  delete(pokemonName: string) {
    const tmp = this.pokemons$.value.filter(
      (pokemon) => pokemon !== pokemonName
    );
    this.setPokemons(tmp);
  }

  exist(pokemonName: string): boolean {
    return this.pokemons$.value.includes(pokemonName);
  }
}
