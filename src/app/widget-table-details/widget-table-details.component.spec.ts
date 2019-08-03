import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetTableDetailsComponent } from './widget-table-details.component';

describe('WidgetTableDetailsComponent', () => {
  let component: WidgetTableDetailsComponent;
  let fixture: ComponentFixture<WidgetTableDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetTableDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetTableDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
