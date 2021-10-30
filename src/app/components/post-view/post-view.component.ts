import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PostModel } from 'src/models/PostModel';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {

  faEllipsisV = faEllipsisV;
  @Input()
  currentPost!: PostModel;

  @Output() 
  cardClickedEvent = new EventEmitter<PostModel>();
  
  minutes = this.generateNumbers();

  constructor() { }

  ngOnInit(): void {
  }

  generateNumbers() : Number {
    return Math.floor(Math.random() * 6) + 1
   }
  
   onCardClicked() {
    this.cardClickedEvent.emit(this.currentPost);
  }

}
