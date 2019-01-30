import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmInfosComponent } from './film-infos.component';

describe('FilmInfosComponent', () => {
  let component: FilmInfosComponent;
  let fixture: ComponentFixture<FilmInfosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmInfosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
