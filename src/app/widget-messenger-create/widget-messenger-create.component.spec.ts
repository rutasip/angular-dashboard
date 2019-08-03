import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetMessengerCreateComponent } from './widget-messenger-create.component';

describe('WidgetMessengerCreateComponent', () => {
  let component: WidgetMessengerCreateComponent;
  let fixture: ComponentFixture<WidgetMessengerCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetMessengerCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetMessengerCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
