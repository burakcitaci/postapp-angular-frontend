import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostModel } from 'src/models/PostModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public posts!: PostModel[];

  title = 'postapp-angular-frontend';
  
  constructor(private router : Router, http: HttpClient) {
    http.get<PostModel[]>('http://localhost:3000/posts').subscribe(result => {
      this.posts = result;
      this.title = this.posts[0].title;
    }, error => console.error(error));
  }

  cardClicked(post: PostModel) {
    this.router
    .navigateByUrl('/post-detail', {state : post});
  }
}
