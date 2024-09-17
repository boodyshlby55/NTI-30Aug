import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _HttpClient: HttpClient) { }

  users: any[] = [
    { id: 1, name: 'John Doe', age: 30, price: 250, birth: '11/12/2005', gender: 'male' },
    { id: 2, name: 'Jane Doe', age: 25, price: 250, birth: '12/10/2005', gender: 'female' },
    { id: 3, name: 'Jane Doe', age: 25, price: 250, birth: '09/10/2005', gender: 'female' },
    { id: 4, name: 'Jane Doe', age: 25, price: 250, birth: '08/10/2005', gender: 'male' },
    { id: 5, name: 'Jane Doe', age: 25, price: 250, birth: '07/10/2005', gender: 'male' },
    { id: 6, name: 'Jane Doe', age: 25, price: 250, birth: '06/10/2005', gender: 'male' },
    { id: 7, name: 'Jane Doe', age: 25, price: 250, birth: '05/10/2005', gender: 'female' },
    { id: 8, name: 'John Doe', age: 30, price: 250, birth: '04/10/2005', gender: 'male' },
  ]

  getProducts(): Observable<any> {
    return this._HttpClient.get('https://fakestoreapi.com/products');
  }
}
