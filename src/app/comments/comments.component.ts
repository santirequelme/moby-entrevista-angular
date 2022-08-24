import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ApiService } from '../services/api.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
  providers: [ApiService]
})
export class CommentsComponent implements OnInit {
  comments:any;
  commentsFilter:any
  filteredComments:any

  @Input() iDate:any;
  @Input() id:any;
  @Output() currentDate:EventEmitter<any>;

  getDate(){
    this.currentDate.emit(this.iDate);
}

  constructor(public apiservice:ApiService, private activatedRoute: ActivatedRoute){
    this.currentDate= new EventEmitter();
   }

  ngOnInit(): void {
    this.apiservice.getComments()
    .subscribe(data => {
      this.comments=data;
      
      this.commentsFilter= this.comments.filter((res:any) => {
        if(res.postId == this.id){
        return  res
        }
  
      });

   });
    
  }

}
