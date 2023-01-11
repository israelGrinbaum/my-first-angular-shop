import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-herrose',
  templateUrl: './herrose.component.html',
  styleUrls: ['./herrose.component.scss']
})
export class HerroseComponent implements OnInit {
  herrose?:Hero[];
  selectedHero?:Hero;
  onSelect(hero:Hero):void{
    this.selectedHero=hero;
  }
  myHero(heroNmae:string):void{
    alert(heroNmae);
  }
  constructor(private heroservice:HeroService) { }

  ngOnInit(): void {
    this.heroservice.getHeroes().subscribe(heroes=>this.herrose=heroes);
  }

}
