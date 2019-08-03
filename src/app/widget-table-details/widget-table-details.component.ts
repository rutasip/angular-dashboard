import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { WidgetTable } from '../resources/widget/models';
import { ResourcesService } from '../resources/widget/resources.service';

@Component({
  selector: 'app-widget-table-details',
  templateUrl: './widget-table-details.component.html',
  styleUrls: ['./widget-table-details.component.scss']
})
export class WidgetTableDetailsComponent implements OnInit{
  @Input() widgetInfo: WidgetTable;
  @Output() widgetDelete = new EventEmitter<number>();

  constructor(private  resourcesService: ResourcesService) {}

  ngOnInit() {
  }
  
  deleteConfirm(id: number) {
    if(confirm("Are you sure you want to delete this widget?")) {
      this.widgetDelete.emit(this.widgetInfo.id);
    }
  }
}