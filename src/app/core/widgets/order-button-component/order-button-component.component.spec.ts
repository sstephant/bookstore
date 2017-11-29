import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderButtonComponentComponent } from './order-button-component.component';

describe('OrderButtonComponentComponent', () => {
  let component: OrderButtonComponentComponent;
  let fixture: ComponentFixture<OrderButtonComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderButtonComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderButtonComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
