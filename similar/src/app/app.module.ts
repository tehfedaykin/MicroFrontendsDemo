import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppComponent } from './app.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { SimilarComponent } from './similar/similar.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: 'list/:id', component: SimilarComponent},
  { path: '**', component: EmptyRouteComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SimilarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MatCardModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    HttpClientModule
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
