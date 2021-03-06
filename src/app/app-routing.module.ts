import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MessagingComponent } from './messaging/messaging.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';


import { WidgetTableCreateComponent } from './widget-table-create/widget-table-create.component';
import { WidgetMessengerCreateComponent } from './widget-messenger-create/widget-messenger-create.component';
import { WidgetTableUpdateComponent } from './widget-table-update/widget-table-update.component';
import { WidgetMessengerUpdateComponent } from './widget-messenger-update/widget-messenger-update.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'messaging', component: MessagingComponent },
  { path: 'widget-table-create', component: WidgetTableCreateComponent },
  { path: 'widget-messenger-create', component: WidgetMessengerCreateComponent },
  { path: 'widget-table-update/:id', component: WidgetTableUpdateComponent },
  { path: 'widget-messenger-update/:id', component: WidgetMessengerUpdateComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }