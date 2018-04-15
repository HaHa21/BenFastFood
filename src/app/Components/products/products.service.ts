import { Injectable } from '@angular/core';
import { Products } from './products.model';
import { Http , Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProductService {

    constructor(private http : Http) { }

    getProducts() : Observable<Products[]>{
      return this.http.get<Products[]>('http://localhost:3000/shopping/data/products.json').catch(this.errorHandler);
    }

    errorHandler(error: Response){
   return Observable.throw(error.message || "Server Error");
 }

}
