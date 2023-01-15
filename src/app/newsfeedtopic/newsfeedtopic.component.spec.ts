import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsfeedtopicComponent } from './newsfeedtopic.component';

describe('NewsfeedtopicComponent', () => {
  let component: NewsfeedtopicComponent;
  let fixture: ComponentFixture<NewsfeedtopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsfeedtopicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsfeedtopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
