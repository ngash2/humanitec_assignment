import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesDeleteComponent } from './activities-delete.component';

describe('ActivitiesDeleteComponent', () => {
  let component: ActivitiesDeleteComponent;
  let fixture: ComponentFixture<ActivitiesDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivitiesDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitiesDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
