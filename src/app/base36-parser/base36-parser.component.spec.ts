import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Base36ParserComponent } from './base36-parser.component';

describe('Base36ParserComponent', () => {
  let component: Base36ParserComponent;
  let fixture: ComponentFixture<Base36ParserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Base36ParserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Base36ParserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
