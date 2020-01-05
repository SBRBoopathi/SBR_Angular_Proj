import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

/************* DropDown  **************/


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent }
];


@NgModule({
  imports:      [ BrowserModule, FormsModule, NgbModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule, HeaderComponent],
  declarations: [ AppComponent, HelloComponent, HomeComponent, HeaderComponent],
  providers: [],
  bootstrap: [AppComponent, HeaderComponent]
})
export class AppModule { }
