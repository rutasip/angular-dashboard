import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetMessengerDetailsComponent } from './widget-messenger-details.component';

describe('WidgetMessengerDetailsComponent', () => {
  let component: WidgetMessengerDetailsComponent;
  let fixture: ComponentFixture<WidgetMessengerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetMessengerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetMessengerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
