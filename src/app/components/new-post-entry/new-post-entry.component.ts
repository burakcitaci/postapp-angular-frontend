import { Component, OnInit } from '@angular/core';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-new-post-entry',
  templateUrl: './new-post-entry.component.html',
  styleUrls: ['./new-post-entry.component.css']
})
export class NewPostEntryComponent implements OnInit {

  faArrowUp = faArrowUp;
  constructor() { }

  ngOnInit(): void {
  }

}
