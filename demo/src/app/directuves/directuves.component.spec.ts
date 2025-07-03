import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectuvesComponent } from './directuves.component';

describe('DirectuvesComponent', () => {
  let component: DirectuvesComponent;
  let fixture: ComponentFixture<DirectuvesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectuvesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectuvesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
