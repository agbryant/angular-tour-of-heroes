import { Component, OnInit } from '@angular/core';
import { Router }   from '@angular/router';

import { Hero } from '../../models/hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: '../../../templates/heroes.component.html',
  styleUrls: ['../../../styles/heroes.component.css']
})

export class HeroesComponent implements OnInit {

  selectedHero = Hero;
  heroes: Hero[];

  constructor(
      private router: Router,
      private heroService: HeroService
  ) { }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
      this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

}
