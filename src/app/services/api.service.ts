import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { PostList } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private http: HttpClient) { }

  getPostsList(){
    const url = `https://jsonplaceholder.typicode.com/posts`;
    return this.http.get<PostList>(url)
  }
  getPostById(id:any){
    const url = `https://jsonplaceholder.typicode.com/posts`;
    return this.http.get(url+id)
  }
  getComments(){
    const url = `https://jsonplaceholder.typicode.com/posts`;
    return this.http.get(url)
  }
}
