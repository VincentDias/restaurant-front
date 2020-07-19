import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dish } from '../models/dish';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  URL = 'http://localhost:8080/dishes';

  constructor(private http: HttpClient) { }


  post() {
    const dish = { name: 'dishname', price: 100, recipes: [{ id: 1 }] };
    return this.http.post(this.URL, dish);
  }
}
