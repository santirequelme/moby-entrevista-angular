import { Component, OnInit } from '@angular/core';
import { PostList } from '../interfaces/interfaces';

import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-postview',
  templateUrl: './postview.component.html',
  styleUrls: ['./postview.component.scss'],

  providers: [ApiService]
})
export class PostviewComponent implements OnInit {
  public posts: PostList[] = [];
  constructor(public apiservice: ApiService) { }
  

  ngOnInit(): void {
    this.apiservice.getPostsList()
      .subscribe(( resp )=>{
        this.posts = resp.slice(0,10)
    });
  }

}
