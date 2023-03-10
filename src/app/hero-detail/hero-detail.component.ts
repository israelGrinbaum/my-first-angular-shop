import { Location } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero?:Hero;
  @Output() clicked=new EventEmitter<string>();
  shout():void{
    this.clicked.emit(`the clicked hero is ${this.hero?.name}`);
  }
  constructor(private route:ActivatedRoute,
              private heroService:HeroService,
              private location:Location) { }

  ngOnInit(): void {
    this.getHero();
  }
  getHero():void{
    const id=this.route!.snapshot!.paramMap!.get('id');
    this.heroService.getHero(+id).subscribe(hero=>this.hero=hero);
  }
  goBack():void{
    this.location.back();
  }


}
