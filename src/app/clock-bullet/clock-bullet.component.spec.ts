import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockBulletComponent } from './clock-bullet.component';

describe('ClockBulletComponent', () => {
  let component: ClockBulletComponent;
  let fixture: ComponentFixture<ClockBulletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClockBulletComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClockBulletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
