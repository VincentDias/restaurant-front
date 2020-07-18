import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../models/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  URL = 'http://localhost:8080/recipes';

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Recipe[]>(this.URL);
  }
}
