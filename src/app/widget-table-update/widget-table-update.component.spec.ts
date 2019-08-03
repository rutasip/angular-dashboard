import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetTableUpdateComponent } from './widget-table-update.component';

describe('WidgetTableUpdateComponent', () => {
  let component: WidgetTableUpdateComponent;
  let fixture: ComponentFixture<WidgetTableUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetTableUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetTableUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
