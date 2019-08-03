import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MessagingComponent } from './messaging/messaging.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'messaging', component: MessagingComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }