import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionCarruselComponent } from './seccion-carrusel.component';

describe('SeccionCarruselComponent', () => {
  let component: SeccionCarruselComponent;
  let fixture: ComponentFixture<SeccionCarruselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeccionCarruselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionCarruselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
