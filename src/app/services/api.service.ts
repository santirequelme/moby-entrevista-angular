import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getPostsList(){
    return this.http.get("https://jsonplaceholder.typicode.com/posts")
  }
  getPostById(id:any){
    return this.http.get("https://jsonplaceholder.typicode.com/posts/"+id)
  }
}
