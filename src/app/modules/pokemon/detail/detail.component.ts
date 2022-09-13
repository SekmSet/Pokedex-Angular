import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {PokemonService} from "../../../services/pokemon.service";

export interface PokemonResponse {
  abilities: Abilities[]
  moves: Moves[]
  sprites: {
    front_default ?: string
    back_default ?: string
  }
  types : Type[]
}

export interface Abilities{
  ability : {
    name ?: string,
    url ?: string
  }
}

interface Moves {
  move:{
    name ?: string,
    url ?: string
  }
}

interface Type {
  type : {
    name ?: string,
    url ?: string
  }
}

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  name : string | undefined;
  nameUppercase : string | undefined;
  pokemonInfo ?: PokemonResponse;
  spinner: boolean = true

  constructor(private actRoute: ActivatedRoute, private PokemonService : PokemonService) { }

  ngOnInit(): void {
    this.name = this.actRoute.snapshot.params['name'];

    if(this.name !== undefined) {
      this.nameUppercase =  this.name.charAt(0).toUpperCase() + this.name.substring(1).toLowerCase()

      this.PokemonService.getPokemon(this.name).subscribe(PokemonResponse => {
        this.pokemonInfo = PokemonResponse
        this.spinner = false
      })
    }
  }
}
