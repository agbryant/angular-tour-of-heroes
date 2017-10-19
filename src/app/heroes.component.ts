import { Component, OnInit } from '@angular/core';

import { Hero } from './models/hero';
import { HeroService } from './services/hero.service';

@Component({
  selector: 'my-heroes',
  template: `
              <h1>{{title}}</h1>
              <h2>My Heroes</h2>
              <ul class="heroes">
                <li *ngFor="let hero of heroes"
                    (click)="onSelect(hero)"
                    [class.selected]="hero === selectedHero">
                  <span class="badge">{{hero.id}}</span> {{hero.name}}
                </li>
              </ul>
              <hero-detail [hero]="selectedHero"></hero-detail>
            `,
  styleUrls: ['./styles/style.css']
})

export class HeroesComponent implements OnInit {

  selectedHero = Hero;
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
      this.selectedHero = hero;
    }
}
