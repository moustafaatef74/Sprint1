import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class StoreService {

  constructor(private http: HttpClient) { }

getProducts() {
  return this.http.get(environment.apiUrl + 'usersProducts/getProducts');
}

getProductById(){
  return this.http.get(environment.apiUrl + 'usersProducts/getProduct/:productId');
}

getProductBelowPrice(){
  return this.http.get(environment.apiUrl + 'usersProducts/getProductsBelowPrice/:price');
}

createProduct(body){
  return this.http.post(environment.apiUrl + 'usersProducts/createProduct', body);
}

updateProduct(id, data){
  return this.http.patch(environment.apiUrl + 'usersProducts/updateProduct/'+id, data);
}

deleteProduct(id){
  return this.http.delete(environment.apiUrl + 'usersProducts/deleteProduct/'+id);
}

getProductsByUsername(){

 return this.http.get(environment.apiUrl + 'usersProducts/getProductsByUsername/:productId');

}
getProductsByComponent(){
  return this.http.get(environment.apiUrl + 'usersProducts/getProductsByComponent/:componentNo');
}

}