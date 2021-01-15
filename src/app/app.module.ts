import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoNavComponent } from './co-nav/co-nav.component';
import { HomeComponent } from './home/home.component';
import { AdminModule } from './admin/admin.module';
import { CoNewsComponent } from './co-news/co-news.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CoNotfoundComponent } from './co-notfound/co-notfound.component';
import { NewsComponent } from './news/news.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CoNavComponent,
    HomeComponent,
    CoNewsComponent,
    NotfoundComponent,
    CoNotfoundComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AdminModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
