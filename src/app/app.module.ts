import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';

/************* DropDown  **************/


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'contact', component: ContactComponent }
];


@NgModule({
  imports:      [ BrowserModule, FormsModule, NgbModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule, HeaderComponent],
  declarations: [ AppComponent, HelloComponent, HomeComponent, HeaderComponent, BannerComponent, AboutComponent, SkillsComponent, ContactComponent, ExperienceComponent],
  providers: [],
  bootstrap: [AppComponent, HeaderComponent, BannerComponent, AboutComponent, SkillsComponent, ContactComponent, ExperienceComponent]
})
export class AppModule { }
