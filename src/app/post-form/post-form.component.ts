import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Post } from '../post'


@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  @Output()
  submitted = new EventEmitter<Post>();

  newPost: Post = {
    title: "",
    thought: ""

  }




  submitPost() {
    console.log("submitted");
    this.submitted.emit(this.newPost);
    // this.newPost = {
    //   title: "",
    //   thought: "",
    // }
  }

  constructor() { }

  ngOnInit() {
  }

}
