import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarLateralComponent } from './toolbar-lateral.component';

describe('ToolbarLateralComponent', () => {
  let component: ToolbarLateralComponent;
  let fixture: ComponentFixture<ToolbarLateralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolbarLateralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarLateralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
