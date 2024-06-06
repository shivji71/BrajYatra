import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './common/header/header.component';
import { LeftMenuComponent } from './common/left-menu/left-menu.component';
import { RightMenuComponent } from './common/right-menu/right-menu.component';
import { AgmCoreModule } from '@agm/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftMenuComponent,
    RightMenuComponent,
    DashboardComponent,
    ImageSliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    IvyCarouselModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCAqm_FtqzYHcTbPZsIxHzM_BQSQNktjBk'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
