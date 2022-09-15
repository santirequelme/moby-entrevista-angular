import { Injectable, Output, EventEmitter } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { PostList, PostDetail, PostComments } from '../interfaces/interfaces';


import { map } from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getPostsList() {
    const url = `https://jsonplaceholder.typicode.com/posts`;
    return this.http.get<PostList>(url)
  }
  getPostById(id: number) {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`

    return this.http.get(url).pipe(map((resp: PostDetail) => {
      return resp
    }))

  }
  getComments(id: number) {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    return this.http.get<PostComments>(url).pipe(map((resp: any) => {

      return resp
    }))

  }
}
