import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteorShower } from './meteor-shower';

describe('MeteorShower', () => {
  let component: MeteorShower;
  let fixture: ComponentFixture<MeteorShower>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeteorShower]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeteorShower);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
