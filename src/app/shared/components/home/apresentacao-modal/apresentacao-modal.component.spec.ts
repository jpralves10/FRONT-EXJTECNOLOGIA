import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApresentacaoModalComponent } from './apresentacao-modal.component';

describe('ApresentacaoModalComponent', () => {
  let component: ApresentacaoModalComponent;
  let fixture: ComponentFixture<ApresentacaoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApresentacaoModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApresentacaoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
