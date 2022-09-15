import { Component, OnInit } from '@angular/core';

import { PokedexService } from '../../../services/pokedex.service';
import { MyTeamService } from '../../../services/my-team.service';

interface ITeam {
  name: string;
  composition: string[];
}

@Component({
  selector: 'my-pokedex',
  templateUrl: './my-pokedex.component.html',
  styleUrls: ['./my-pokedex.component.scss'],
})
export class MyPokedexComponent implements OnInit {
  pokedex: string[] = [];
  selectedPokemon: string[] = [];
  value: string = '';
  createTeam: ITeam = {
    name: '',
    composition: [],
  };

  log: string = '';

  constructor(
    private PokedexService: PokedexService,
    private MyTeamService: MyTeamService
  ) {}

  ngOnInit(): void {
    this.PokedexService.pokemons$.subscribe((value) => {
      this.pokedex = value;
    });

    this.MyTeamService.selectedPokemon$.subscribe((value) => {
      this.selectedPokemon = value;
    });
  }

  // Create my new team
  handleCreateTeam(): void {
    this.createTeam.name = this.value;
    this.createTeam.composition = this.selectedPokemon;

    this.log = this.MyTeamService.add(this.createTeam);
    this.MyTeamService.setSelectedPokemon([]);

    this.createTeam = {
      name: '',
      composition: [],
    };

    this.value = '';
  }

  // Add my pokemon to my selected pokemons list for creation of a new team
  public addToTeamList(name: string) {
    this.MyTeamService.addPokemon(name);
  }

  // remove pokemon to my selected pokemons list fir creation of a new team
  public removeToTeam(name: string) {
    this.MyTeamService.deletePokemon(name);
  }

  // Remove pokemon fro my pokedex
  public removeToPokedex(name: string) {
    this.PokedexService.delete(name);
  }
}
