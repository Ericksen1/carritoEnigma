import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor() { }

  getData(): Observable<any[]> {
    
    return of([
      { id: 1, name: 'Producto 1', price: 10, quantity: 5, total: 50, image: '#' },
      { id: 2, name: 'Producto 2', price: 15, quantity: 5, total: 75, image: '#' },
      { id: 3, name: 'Producto 3', price: 20, quantity: 5, total: 100, image: '#' },
      { id: 3, name: 'Producto 4', price: 25, quantity: 5, total: 125, image: '#' },
      
    ]);
  }
}
