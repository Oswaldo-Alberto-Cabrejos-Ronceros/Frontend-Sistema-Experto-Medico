import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryPrimaryCardComponent } from './history-primary-card.component';

describe('HistoryPrimaryCardComponent', () => {
  let component: HistoryPrimaryCardComponent;
  let fixture: ComponentFixture<HistoryPrimaryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoryPrimaryCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryPrimaryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
