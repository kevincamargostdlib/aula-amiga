import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridCoursesStudentComponent } from './grid-courses-student.component';

describe('GridCoursesStudentComponent', () => {
  let component: GridCoursesStudentComponent;
  let fixture: ComponentFixture<GridCoursesStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridCoursesStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridCoursesStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
