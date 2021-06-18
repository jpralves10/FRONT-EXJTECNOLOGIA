import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelcontroleComponent } from './painelcontrole.component';

describe('PainelcontroleComponent', () => {
  let component: PainelcontroleComponent;
  let fixture: ComponentFixture<PainelcontroleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PainelcontroleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelcontroleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
