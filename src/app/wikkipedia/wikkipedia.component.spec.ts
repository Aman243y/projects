import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WikkipediaComponent } from './wikkipedia.component';

describe('WikkipediaComponent', () => {
  let component: WikkipediaComponent;
  let fixture: ComponentFixture<WikkipediaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WikkipediaComponent]
    });
    fixture = TestBed.createComponent(WikkipediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
