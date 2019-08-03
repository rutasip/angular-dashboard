import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { WidgetMessenger, WidgetMessengerUser } from '../resources/widget/models';
import { ResourcesService } from '../resources/widget/resources.service';

@Component({
  selector: 'app-widget-messenger-details',
  templateUrl: './widget-messenger-details.component.html',
  styleUrls: ['./widget-messenger-details.component.scss']
})
export class WidgetMessengerDetailsComponent implements OnInit{
  @Input() widgetInfo: WidgetMessenger;
  @Output() widgetDelete = new EventEmitter<number>();

  // Hardcoded current user id for testing
  currentUserId: number = 128725;

  constructor(private  resourcesService: ResourcesService) {}

  ngOnInit() {
  }

  isCurrentUser(message: WidgetMessengerUser) {
    return this.currentUserId === message.user_id;
  }

  deleteConfirm(id: number) {
    if(confirm("Are you sure you want to delete this widget?")) {
      this.widgetDelete.emit(this.widgetInfo.id);
    }
  }
}
