import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent }
];


@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  exports: [
  RouterModule
  ],
  declarations: [ AppComponent, HelloComponent, HomeComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
