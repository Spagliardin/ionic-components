import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Components } from '../interfaces/interfaces';
import { delay } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient ) { }

  getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getMenu(){
    return this.http.get<Components[]>('/assets/data/menu-opts.json');
  }

  getSearchs(){
    return this.http.get('https://jsonplaceholder.typicode.com/albums');
  }

  getHeroes(){
    return this.http.get('/assets/data/superheroes.json')
    .pipe(
      delay( 1500 )
    );
  }



}
