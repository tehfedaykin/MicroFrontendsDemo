import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { VillagerComponent } from './villager/villager.component';

const routes: Routes = [
  { path: 'list/:id', component: VillagerComponent},
  { path: '**', component: EmptyRouteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
})
export class AppRoutingModule { }
