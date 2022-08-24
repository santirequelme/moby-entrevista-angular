import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsviewComponent } from './detailsview.component';

describe('DetailsviewComponent', () => {
  let component: DetailsviewComponent;
  let fixture: ComponentFixture<DetailsviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
