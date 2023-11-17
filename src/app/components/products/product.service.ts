import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../product/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly API = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) { }

  list(): Observable<Product[]>{
    return this.http.get<Product[]>(this.API)
  }

}
