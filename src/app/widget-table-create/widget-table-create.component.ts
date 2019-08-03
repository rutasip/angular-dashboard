import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { WidgetTableCreate, WidgetType } from '../resources/widget/models';
import { ResourcesService } from '../resources/widget/resources.service';

@Component({
  selector: 'app-widget-table-create',
  templateUrl: './widget-table-create.component.html',
  styleUrls: ['./widget-table-create.component.css']
})
export class WidgetTableCreateComponent implements OnInit {

  model: WidgetTableCreate = {
    title: '',
    type: WidgetType.Table,
    color: 'light',
    data: '',
  };

  constructor(
    private resourcesService: ResourcesService,
    private router: Router
  ) {}

  ngOnInit() {

  }

  createWidget() {
    this.resourcesService.createWidget(this.model).subscribe((data: {}) => {
      this.router.navigate(['/'])
    });
  }

}
