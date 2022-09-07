import { Component, OnInit } from '@angular/core';

import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detailsview',
  templateUrl: './detailsview.component.html',
  styleUrls: ['./detailsview.component.scss'],
  providers: [ApiService]
})
export class DetailsviewComponent implements OnInit {
  post:any;
  myDate= new Date();
  currentDate=false;

  getDate(){
    this.currentDate=true;
  }

  constructor( public apiservice: ApiService, private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    const id= this.activatedRoute.snapshot.paramMap.get("id")

    this.apiservice.getPostById(id)
    .subscribe(data => {
      this.post= data
    })
  }
}


