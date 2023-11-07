import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCitasComponent } from './detail-citas.component';

describe('DetailCitasComponent', () => {
  let component: DetailCitasComponent;
  let fixture: ComponentFixture<DetailCitasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailCitasComponent]
    });
    fixture = TestBed.createComponent(DetailCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
