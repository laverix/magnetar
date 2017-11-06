import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TorrentsListComponent} from './torrents-list.component';

describe('TorrentsListComponent', () => {
  let component: TorrentsListComponent;
  let fixture: ComponentFixture<TorrentsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TorrentsListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TorrentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
