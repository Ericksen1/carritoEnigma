import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompraFinalizadaPage } from './compra-finalizada.page';

describe('CompraFinalizadaPage', () => {
  let component: CompraFinalizadaPage;
  let fixture: ComponentFixture<CompraFinalizadaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraFinalizadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
