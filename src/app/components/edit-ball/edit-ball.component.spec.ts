import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBallComponent } from './edit-ball.component';

describe('EditBallComponent', () => {
  let component: EditBallComponent;
  let fixture: ComponentFixture<EditBallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
