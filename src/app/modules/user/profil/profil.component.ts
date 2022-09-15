import { Component, OnInit } from '@angular/core';
import { ProfilService } from '../../../services/profil.service';
import { MyTeamService } from '../../../services/my-team.service';
import { PokedexService } from '../../../services/pokedex.service';

@Component({
  selector: 'profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
})
export class ProfilComponent implements OnInit {
  newUser?: boolean;
  ngPseudo: string = '';
  ngColor: string = '';
  color: string = '';
  pseudo: string = '';
  teams: number = 0;
  pokemons: number = 0;

  constructor(
    private ProfilService: ProfilService,
    private MyTeamService: MyTeamService,
    private PokedexService: PokedexService
  ) {
    this.ProfilService.pseudo$.subscribe((value) => {
      this.pseudo = value;
    });

    this.ProfilService.color$.subscribe((value) => {
      this.color = value;
    });

    this.MyTeamService.teams$.subscribe((value) => {
      this.teams = value.length;
    });

    this.PokedexService.pokemons$.subscribe((value) => {
      this.pokemons = value.length;
    });

    this.newUser = !(this.pseudo && this.color);
  }

  ngOnInit(): void {}

  handleCreateProfil() {
    this.ProfilService.setColor(this.ngColor);
    this.ProfilService.setPseudo(this.ngPseudo);
    this.newUser = false;
  }
}
