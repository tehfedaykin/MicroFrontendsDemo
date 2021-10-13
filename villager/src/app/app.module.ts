import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatCardModule } from '@angular/material/card';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { VillagerComponent } from './villager/villager.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    VillagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
