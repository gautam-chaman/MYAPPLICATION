import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlanckpageComponent } from './blanckpage.component';

describe('BlanckpageComponent', () => {
  let component: BlanckpageComponent;
  let fixture: ComponentFixture<BlanckpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlanckpageComponent]
    });
    fixture = TestBed.createComponent(BlanckpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
