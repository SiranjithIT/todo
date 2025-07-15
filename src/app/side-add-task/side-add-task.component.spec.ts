import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideAddTaskComponent } from './side-add-task.component';

describe('SideAddTaskComponent', () => {
  let component: SideAddTaskComponent;
  let fixture: ComponentFixture<SideAddTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideAddTaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideAddTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
