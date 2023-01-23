import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinutosComponent } from './minutos.component';

describe('MinutosComponent', () => {
  let component: MinutosComponent;
  let fixture: ComponentFixture<MinutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinutosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
