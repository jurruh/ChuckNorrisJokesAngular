import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Joke } from './joke';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class JokeService {

  constructor(private http:Http) { }

  API_URL = 'https://api.chucknorris.io/jokes/random';

  getRandomJoke(): Promise<Joke> {
    return this.http.get(this.API_URL)
               .toPromise()
               .then(response => response.json() as Joke)
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


}
