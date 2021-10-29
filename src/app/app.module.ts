import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewPostEntryComponent } from './components/new-post-entry/new-post-entry.component';
import { NewPostBottomBarComponent } from './components/new-post-bottom-bar/new-post-bottom-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NewPostEntryComponent,
    NewPostBottomBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
