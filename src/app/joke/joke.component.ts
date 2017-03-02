import { Component, OnInit,Input } from '@angular/core';
import { Joke } from '../joke';
import { JokeService } from '../joke.service';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {

  @Input() joke: Joke;

  constructor(private jokeService: JokeService) { }

  ngOnInit() {
    this.joke = new Joke();
    this.joke.value = "";
    this.jokeService.getRandomJoke().then(joke => this.joke = joke);
  }

  refresh(){
    this.jokeService.getRandomJoke().then(joke => this.joke = joke);
  }

}
