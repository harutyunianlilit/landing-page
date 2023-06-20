import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisingBannerComponent } from './advertising-banner.component';

describe('AdvertisingBannerComponent', () => {
  let component: AdvertisingBannerComponent;
  let fixture: ComponentFixture<AdvertisingBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertisingBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvertisingBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
