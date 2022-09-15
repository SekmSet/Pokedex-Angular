import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PokemonService } from '../../../../services/pokemon.service';

@Component({
  selector: 'search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.scss'],
})
export class SearchComponentComponent implements OnInit {
  value?: string;

  constructor(private PokemonService: PokemonService, private router: Router) {}

  ngOnInit(): void {}

  handleChange() {
    if (this.value) {
      const lowercase: string = this.value?.toLowerCase();
      this.PokemonService.getPokemon(lowercase).subscribe(
        (PokemonResponse) => {
          this.value = '';
          this.router.navigate([`pokemon/detail/${lowercase}`]);
        },
        (err) => {
          this.router.navigate(['pokemon/detail/not-found/404']);
          this.value = '';
        }
      );
    }
  }
}
