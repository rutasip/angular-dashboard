import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetTableCreateComponent } from './widget-table-create.component';

describe('WidgetTableCreateComponent', () => {
  let component: WidgetTableCreateComponent;
  let fixture: ComponentFixture<WidgetTableCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetTableCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetTableCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
