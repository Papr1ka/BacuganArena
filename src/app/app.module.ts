import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoNavComponent } from './co-nav/co-nav.component';
import { HomeComponent } from './home/home.component';
import { CoNewsComponent } from './co-news/co-news.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CoNotfoundComponent } from './co-notfound/co-notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    CoNavComponent,
    HomeComponent,
    CoNewsComponent,
    NotfoundComponent,
    CoNotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
