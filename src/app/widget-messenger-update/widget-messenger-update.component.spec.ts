import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetMessengerUpdateComponent } from './widget-messenger-update.component';

describe('WidgetMessengerUpdateComponent', () => {
  let component: WidgetMessengerUpdateComponent;
  let fixture: ComponentFixture<WidgetMessengerUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetMessengerUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetMessengerUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
