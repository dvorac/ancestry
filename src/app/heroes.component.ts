import { Component, OnInit } from '@angular/core';
import { Hero } from './hero/hero'
import { HeroDetailComponent } from './hero/hero-detail.component'
import { HeroService } from "./hero/hero.service";

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})

export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  selectedHero: Hero;
  heroes: Hero[];

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
}
