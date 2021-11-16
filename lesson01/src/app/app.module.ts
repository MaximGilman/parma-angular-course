import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { NewsItemComponent } from './news/news-item/news-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    NewsItemComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
