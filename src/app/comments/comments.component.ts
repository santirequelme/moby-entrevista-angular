import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { PostComments } from '../interfaces/interfaces';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
  providers: [ApiService]
})
export class CommentsComponent implements OnInit {

  @Input() iDate: boolean = false;
  @Input() id: any;
  @Output() currentDate: EventEmitter<boolean>;

  comments:any[] = []; 
  newComment: any;
  dataForm!: FormGroup;

  getDate() {
    this.currentDate.emit(this.iDate);
  }

  constructor(private apiservice: ApiService, private activatedRoute: ActivatedRoute, private fb: FormBuilder) {
    this.currentDate = new EventEmitter();
  }

  ngOnInit(): void {
    this.getComments()
    this.initForm()
  }

  deleteComment(comment: any) {

    this.comments = this.comments.filter((item) => {

      return item.id !== comment.id

    })
    localStorage.setItem(`comments/${this.comments[0].postId}`, JSON.stringify(this.comments))
  }


  submit() {
    if (this.dataForm.valid) {


      this.newComment = {
        name: this.dataForm.value.name,
        email: this.dataForm.value.email,
        body: this.dataForm.value.comment,
        id: this.comments[this.comments.length - 1].id + 1,
        postId: this.activatedRoute.snapshot.params['id'],
        //postId:this.activatedRoute.snapshot.params.id,
        isAdded: true
      }

      if (this.newComment.body.length > 500) {
        alert("Comments are up to 500 characters")
      } else {

        this.comments.push(this.newComment)
        localStorage.setItem(`comments/${this.newComment.postId}`, JSON.stringify(this.comments))
      }
    }

  }


  initForm() {
    this.dataForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", Validators.compose([Validators.required, Validators.email])],
      comment: ["", Validators.required]
    })

  }


  getComments() {
    this.apiservice.getComments(this.id).subscribe((resp) => {

      if (localStorage.getItem(`comments/${resp[0].postId}`)) {

        let localStorageComments = JSON.parse(localStorage.getItem(`comments/${resp[0].postId}`) || "")

        if (localStorageComments !== "") {
          this.comments = localStorageComments;
        }

      } else {
        this.comments = resp;
      }

    })
  }
}
