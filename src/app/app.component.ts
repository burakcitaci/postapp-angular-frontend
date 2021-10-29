
import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostModel } from 'src/models/PostModel';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  faEllipsisV = faEllipsisV;
 
  public posts!: PostModel[];

  title = 'postapp-angular-frontend';
  minutes = this.generateNumbers();
  constructor(http: HttpClient) {
    http.get<PostModel[]>('http://localhost:3000/posts').subscribe(result => {
      this.posts = result;
      this.title = this.posts[0].title;
    }, error => console.error(error));
  }

  generateNumbers() : Number {
     return Math.floor(Math.random() * 6) + 1
  }
}
