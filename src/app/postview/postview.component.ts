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
  

  ngOnInit(): void {
    this.apiservice.getPostsList().subscribe((res:any)=>{
     
      this.posts = res.slice(0,10)
    });
    
  }

}
