import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoTextComponent } from './todo-text.component';

describe('TodoTextComponent', () => {
  let component: TodoTextComponent;
  let fixture: ComponentFixture<TodoTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
