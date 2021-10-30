
import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostModel } from 'src/models/PostModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  
  title = 'postapp-angular-frontend';
  
 
}
