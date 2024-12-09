import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  Url='http://localhost:3000/products';

  constructor(private _http: HttpClient) { }

  addProdcut (data:any){
    return this._http.post(this.Url,data)
  }

  updateProdcut (id: number, data:any){
    return this._http.put(this.Url+`/${id}`,data)
  }


  getProductList(): Observable<any>{
    return this._http.get(this.Url);
  }

  deleteProduct (id: number): Observable<any> {
    return this._http.delete(this.Url+`/${id}`);
  }
}
