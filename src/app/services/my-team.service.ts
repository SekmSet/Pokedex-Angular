import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface ITeam {
  name: string;
  composition: string[];
}

@Injectable({
  providedIn: 'root',
})
export class MyTeamService {
  teams$: BehaviorSubject<ITeam[]>;
  selectedPokemon$: BehaviorSubject<string[]>;

  constructor() {
    this.teams$ = new BehaviorSubject<ITeam[]>([]);
    this.selectedPokemon$ = new BehaviorSubject<string[]>([]);
  }

  // ADD OR DELETE A POKEMON TO MY SELECTED POKEMONS LIST

  setSelectedPokemon(pokemonList: string[]) {
    this.selectedPokemon$.next(pokemonList);
  }

  addPokemon(pokemon: string) {
    if (this.selectedPokemon$.value.length < 6) {
      const tmp = [...this.selectedPokemon$.value, pokemon];
      this.setSelectedPokemon(tmp);
    }
  }

  deletePokemon(name: string) {
    const tmp = this.selectedPokemon$.value.filter(
      (pokemon) => pokemon !== name
    );
    this.setSelectedPokemon(tmp);
  }

  // CREATE OR DELETE A TEAM

  setTeams(teams: ITeam[]) {
    this.teams$.next(teams);
  }

  add(team: ITeam): string {
    const teamNameIsexisting = this.teamNameAlreadyUsed(team.name);

    if (teamNameIsexisting) {
      return 'This team name is already used.';
    } else {
      const newTeam = [...this.teams$.value, team];
      this.setTeams(newTeam);

      return 'You create a new pokémon team.';
    }
  }

  delete(name: string) {
    const newTeam = this.teams$.value.filter((team) => team.name !== name);
    this.setTeams(newTeam);
  }

  teamNameAlreadyUsed(name: string): boolean {
    return this.teams$.value.map((team) => team.name).includes(name);
  }
}
