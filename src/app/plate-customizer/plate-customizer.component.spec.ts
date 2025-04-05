import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlateCustomizerComponent } from './plate-customizer.component';

describe('PlateCustomizerComponent', () => {
  let component: PlateCustomizerComponent;
  let fixture: ComponentFixture<PlateCustomizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlateCustomizerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlateCustomizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
