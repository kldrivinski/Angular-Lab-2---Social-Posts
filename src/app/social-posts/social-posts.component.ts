import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {

  posts: Post[] = [
    {
      title: "current thoughts",
      thought: "how does this work?"
    },
    {
      title: "My first Post",
      thought: "how exciting"
    }
  ]




  visible: boolean = false;

  onDelete(index: number) {
    this.posts.splice(index, 1)
  }


  onSubmit(newPost: Post) {
    console.log("new post?");
    console.log(this.posts)
    this.posts.push(newPost)
    this.visible = false;
  }

  toggleDiv() {
    console.log("toggle");
    this.visible = !this.visible;
  }

  constructor() { }

  ngOnInit() {
  }

}
