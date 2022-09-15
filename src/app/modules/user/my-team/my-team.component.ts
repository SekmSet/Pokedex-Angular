import { Component, OnInit } from '@angular/core';

import { MyTeamService } from '../../../services/my-team.service';
import { ITeam } from '../../../interfaces/team';

@Component({
  selector: 'my-team',
  templateUrl: './my-team.component.html',
  styleUrls: ['./my-team.component.scss'],
})
export class MyTeamComponent implements OnInit {
  teams: ITeam[] = [];

  constructor(private MyTeamService: MyTeamService) {
    this.MyTeamService.teams$.subscribe((value) => {
      this.teams = value;
    });
  }

  ngOnInit(): void {}

  removeTeam(name: string) {
    console.log('delete name');
    this.MyTeamService.delete(name);
  }
}
