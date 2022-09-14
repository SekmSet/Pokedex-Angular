import { Component, OnInit } from '@angular/core';
import {PokedexService} from "../../../services/pokedex.service";

@Component({
  selector: 'my-pokedex',
  templateUrl: './my-pokedex.component.html',
  styleUrls: ['./my-pokedex.component.scss']
})
export class MyPokedexComponent implements OnInit {
  pokedex: string[] = []

  constructor(private PokedexService : PokedexService) { }

  ngOnInit(): void {
    this.PokedexService.pokemons$.subscribe((value) => {
      this.pokedex = value
    })
  }

  public removeToPokedex(name: string) {
    this.PokedexService.delete(name)
  }
}
