import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResourcesService } from '../resources/widget/resources.service';

@Component({
  selector: 'app-widget-table-update',
  templateUrl: './widget-table-update.component.html',
  styleUrls: ['./widget-table-update.component.css']
})
export class WidgetTableUpdateComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];
  widgetInfo: any = {};
  
  constructor(
    private resourcesService: ResourcesService,
    private router: Router,
    public actRoute: ActivatedRoute
  ) { 
  }

  ngOnInit() {
    this.resourcesService.getWidgetById(this.id).subscribe((data: {}) => {
      this.widgetInfo = data;
      this.widgetInfo.data = JSON.stringify(this.widgetInfo.data);
    })
  }

  updateWidget(widgetInfo) {
    this.resourcesService.updateWidget(this.widgetInfo).subscribe((data: {}) => {
      this.router.navigate(['/'])
    });
  }

}
