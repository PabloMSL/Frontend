import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cartas } from './cartas';

describe('Cartas', () => {
  let component: Cartas;
  let fixture: ComponentFixture<Cartas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Cartas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cartas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
