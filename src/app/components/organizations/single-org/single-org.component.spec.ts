import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCompanyComponent } from './single-org.component';

describe('SingleCompanyComponent', () => {
  let component: SingleCompanyComponent;
  let fixture: ComponentFixture<SingleCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SingleCompanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
