import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinerDasboardComponent } from './joiner-dasboard.component';

describe('JoinerDasboardComponent', () => {
  let component: JoinerDasboardComponent;
  let fixture: ComponentFixture<JoinerDasboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinerDasboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoinerDasboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
