import { Component, OnInit, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { Post } from '../post';
// import {
//   trigger,
//   state,
//   style,
//   animate,
//   transition,
// } from '@angular/animations';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  // animations: [
  //   trigger('PostComponent', [
  //     state('spin', style({
  //       transform: 'rotateY(180deg) rotateZ(90deg)',
  //     })),
  //     transition('spin', animate('500ms ease')),
  //   ])
  // ]
})
export class PostComponent implements OnInit {

  // show: boolean = false;

  // get stateName() {
  //   return this.show ? 'show' : 'hide'
  // }

  // toggleShow() {
  //   this.show = !this.show;
  // }

  counter: number = 0;

  @Output()
  deleted = new EventEmitter<void>();
  @Input()
  post: Post;


  countUpvote() {
    this.counter++
    console.log(this.counter);
  }

  deletePost() {
    this.deleted.emit()
  }

  constructor() { }

  ngOnInit() {
  }

}
