import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DignosisUnitaryPageComponent } from './dignosis-unitary-page.component';

describe('DignosisUnitaryPageComponent', () => {
  let component: DignosisUnitaryPageComponent;
  let fixture: ComponentFixture<DignosisUnitaryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DignosisUnitaryPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DignosisUnitaryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
