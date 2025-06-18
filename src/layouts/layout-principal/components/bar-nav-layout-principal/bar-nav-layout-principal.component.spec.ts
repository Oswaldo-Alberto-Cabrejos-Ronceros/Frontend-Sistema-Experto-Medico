import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarNavLayoutPrincipalComponent } from './bar-nav-layout-principal.component';

describe('BarNavLayoutPrincipalComponent', () => {
  let component: BarNavLayoutPrincipalComponent;
  let fixture: ComponentFixture<BarNavLayoutPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarNavLayoutPrincipalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarNavLayoutPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
