import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfilService {
  pseudo$: BehaviorSubject<string>;
  color$: BehaviorSubject<string>;

  constructor() {
    this.pseudo$ = new BehaviorSubject<string>('');
    this.color$ = new BehaviorSubject<string>('');
  }

  setPseudo(name: string) {
    this.pseudo$.next(name);
  }

  setColor(color: string) {
    this.color$.next(color);
  }
}
