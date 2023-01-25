import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsfeedpersComponent } from './newsfeedpers.component';

describe('NewsfeedpersComponent', () => {
  let component: NewsfeedpersComponent;
  let fixture: ComponentFixture<NewsfeedpersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsfeedpersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsfeedpersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
