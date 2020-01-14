import { Component, OnInit } from "@angular/core";
import { ResourcesService } from "../resources/widget/resources.service";

import { Widget } from "../resources/widget//models";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  widgets: Widget[];

  constructor(private resourcesService: ResourcesService) {}

  ngOnInit() {
    this.resourcesService
      .getWidgets()
      .subscribe(response => (this.widgets = response));
  }

  onWidgetDelete(id: number) {
    this.resourcesService
      .deleteWidget(id)
      .subscribe(
        response =>
          (this.widgets = this.widgets.filter(widget => widget.id !== id))
      );
  }
}
