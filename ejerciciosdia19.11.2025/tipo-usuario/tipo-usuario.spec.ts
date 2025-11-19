import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoUsuario } from './tipo-usuario';

describe('TipoUsuario', () => {
  let component: TipoUsuario;
  let fixture: ComponentFixture<TipoUsuario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TipoUsuario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoUsuario);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
