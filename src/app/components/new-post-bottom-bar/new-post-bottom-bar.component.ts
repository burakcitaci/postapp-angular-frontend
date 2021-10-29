import { Component, OnInit } from '@angular/core';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-new-post-bottom-bar',
  templateUrl: './new-post-bottom-bar.component.html',
  styleUrls: ['./new-post-bottom-bar.component.css']
})
export class NewPostBottomBarComponent implements OnInit {

  faThumbsUp = faThumbsUp;
  faComment = faComment;
  faShare = faShare;
  constructor() { }

  ngOnInit(): void {
  }

}
