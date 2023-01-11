import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { MessageService } from './message.service';
import { Heroes } from './mockherrose';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes():Observable<Hero[]>{
    // this.messageService.add('HeroService: fetched heroes');
    this.messageService.add("HeroService: fetched heroes");
    return of (Heroes);
  }
  getHero(id:number):Observable<Hero>{
    this.messageService.add(`HeroService: fatched  hero id=${id}`);
    return of(Heroes.find(hero=>hero.id===id));

  }
  constructor(private messageService:MessageService) { }
}
