import { Component, OnInit } from '@angular/core';

import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-postview',
  templateUrl: './postview.component.html',
  styleUrls: ['./postview.component.scss'],

  providers: [ApiService]
})
export class PostviewComponent implements OnInit {

  posts:any=[]

  constructor(public apiservice: ApiService) { }

  getPostList(){
    this.apiservice.getPostsList()
    .subscribe(data => {
      this.posts=data
    })
  }
  

  ngOnInit(): void {
    this.getPostList()
  }

}
