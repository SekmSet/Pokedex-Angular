import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

import {PokemonService} from "../../../../services/pokemon.service";

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
  selector: 'search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.scss']
})
export class SearchComponentComponent implements OnInit {
  value?:string

  constructor(private PokemonService : PokemonService, private router: Router) { }

  ngOnInit(): void {
  }

  handleChange() {
    if(this.value) {
    const lowercase : string = this.value?.toLowerCase()
      this.PokemonService.getPokemon(lowercase).subscribe(
        PokemonResponse => {
          this.value = ''
          this.router.navigate([`pokemon/detail/${lowercase}`]);
        },
        err => {
          this.router.navigate(['pokemon/detail/not-found/404']);
          this.value = ''
        }
      )
    }
  }

}
