import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../../interfaces/hero';
import { HEROES } from '../../data/mock-heroes';
import { MessageService } from '../message/message.service';

//https://stackoverflow.com/questions/50848357/what-is-the-purpose-of-providedin-with-the-injectable-decorator-when-generating
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
