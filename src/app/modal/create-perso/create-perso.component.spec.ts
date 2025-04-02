import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePersoComponent } from './create-perso.component';

describe('CreatePersoComponent', () => {
  let component: CreatePersoComponent;
  let fixture: ComponentFixture<CreatePersoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePersoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePersoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
