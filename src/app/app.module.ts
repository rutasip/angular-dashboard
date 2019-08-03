import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MessagingComponent } from './messaging/messaging.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { WidgetCreateComponent } from './widget-create/widget-create.component';
import { WidgetTableDetailsComponent } from './widget-table-details/widget-table-details.component';
import { WidgetMessengerDetailsComponent } from './widget-messenger-details/widget-messenger-details.component';
import { WidgetTableUpdateComponent } from './widget-table-update/widget-table-update.component';
import { WidgetMessengerUpdateComponent } from './widget-messenger-update/widget-messenger-update.component';
import { WidgetMessengerCreateComponent } from './widget-messenger-create/widget-messenger-create.component';
import { WidgetTableCreateComponent } from './widget-table-create/widget-table-create.component';
import { ResourcesService } from './resources/widget/resources.service';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    SidebarComponent,
    DashboardComponent,
    MessagingComponent,
    NotFoundComponent,
    WidgetCreateComponent,
    WidgetTableDetailsComponent,
    WidgetMessengerDetailsComponent,
    WidgetTableUpdateComponent,
    WidgetMessengerUpdateComponent,
    WidgetMessengerCreateComponent,
    WidgetTableCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ResourcesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
