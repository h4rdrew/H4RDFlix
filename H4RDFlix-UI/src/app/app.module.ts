import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowcaseComponent } from './componentes/showcase/showcase.component';
import { SwiperModule } from 'swiper/angular';
import { SwiperImportModule } from './swiper-imports/swiper-imports.module';
import { VideoComponent } from './componentes/video/video.component';
import { PlyrModule } from 'ngx-plyr';

@NgModule({
  declarations: [AppComponent, ShowcaseComponent, VideoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SwiperModule,
    SwiperImportModule,
    PlyrModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
