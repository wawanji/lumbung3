import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributionsPage } from './distributions.page';

describe('DistributionsPage', () => {
  let component: DistributionsPage;
  let fixture: ComponentFixture<DistributionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributionsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
