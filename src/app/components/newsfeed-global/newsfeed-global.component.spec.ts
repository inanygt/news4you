import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsfeedGlobalComponent } from './newsfeed-global.component';

describe('NewsfeedGlobalComponent', () => {
  let component: NewsfeedGlobalComponent;
  let fixture: ComponentFixture<NewsfeedGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsfeedGlobalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsfeedGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
