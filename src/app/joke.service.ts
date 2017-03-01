import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';

@Injectable()
export class JokeService {

  constructor(private http:Http) { }

  API_URL = 'https://api.chucknorris.io/';

  getRandomJoke() {
    return this.http.get(this.API_URL + 'random').map((res:Response) => res.json());
  }
}
