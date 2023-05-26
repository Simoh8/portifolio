import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MYCVComponent } from './mycv.component';

describe('MYCVComponent', () => {
  let component: MYCVComponent;
  let fixture: ComponentFixture<MYCVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MYCVComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MYCVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
