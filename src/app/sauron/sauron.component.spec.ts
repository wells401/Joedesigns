import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SauronComponent } from './sauron.component';

describe('SauronComponent', () => {
  let component: SauronComponent;
  let fixture: ComponentFixture<SauronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SauronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SauronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
