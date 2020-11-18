import { Injectable } from '@angular/core';
import { Hero } from '../../interfaces/hero';
import { HEROES } from '../../data/mock-heroes';

//https://stackoverflow.com/questions/50848357/what-is-the-purpose-of-providedin-with-the-injectable-decorator-when-generating
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
}
