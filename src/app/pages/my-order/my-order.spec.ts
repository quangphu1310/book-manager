import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOrderComponent } from './my-order';

describe('MyOrder', () => {
  let component: MyOrderComponent;
  let fixture: ComponentFixture<MyOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyOrderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
