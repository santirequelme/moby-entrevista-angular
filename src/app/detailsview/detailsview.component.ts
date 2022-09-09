import { Component, OnInit } from '@angular/core';

import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

import { PostDetail } from '../interfaces/interfaces';


@Component({
  selector: 'app-detailsview',
  templateUrl: './detailsview.component.html',
  styleUrls: ['./detailsview.component.scss'],
  providers: [ApiService]
})
export class DetailsviewComponent implements OnInit {
  post = new PostDetail;
  id?:number;
  myDate= new Date();
  currentDate=false;

  getDate(){
    this.currentDate=true;
  }
  
  constructor( public apiservice: ApiService, private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    //check id 
    this.activatedRoute.snapshot.params['id'] ? this.id = this.activatedRoute.snapshot.params['id'] : null;
    //this.activatedRoute.snapshot.params.id? this.id = this.activatedRoute.snapshot.params.id : null;
    
    if(this.id){
      this.apiservice.getPostById(this.id).subscribe((resp)=>{
        this.post = resp;
      })
    }
  }
}


