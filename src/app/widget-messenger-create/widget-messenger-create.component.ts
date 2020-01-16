import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Router } from "@angular/router";
import { WidgetMessengerCreate, WidgetType } from "../resources/widget/models";
import { ResourcesService } from "../resources/widget/resources.service";

@Component({
  selector: "app-widget-messenger-create",
  templateUrl: "./widget-messenger-create.component.html",
  styleUrls: ["./widget-messenger-create.component.css"]
})
export class WidgetMessengerCreateComponent implements OnInit {
  model: WidgetMessengerCreate = {
    title: "",
    type: WidgetType.Messenger,
    data: ""
  };

  constructor(
    private resourcesService: ResourcesService,
    private router: Router
  ) {}

  ngOnInit() {}

  createWidget() {
    this.resourcesService.createWidget(this.model).subscribe((data: {}) => {
      this.router.navigate(["/"]);
    });
  }
}
