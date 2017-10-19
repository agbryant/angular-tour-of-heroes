import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { RouterModule }   from '@angular/router';

import { AppComponent }  from './app.component';
import {AppRoutingModule} from './app-routing.module';

import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroService } from './services/hero.service';


@NgModule({
  imports:      [
      BrowserModule,
      FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
      AppRoutingModule
  ],
  declarations: [
                  AppComponent,
                  HeroesComponent,
                  HeroDetailComponent,
                  DashboardComponent
   ],
  providers: [HeroService],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
