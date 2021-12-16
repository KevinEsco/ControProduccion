/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AtributoComponent } from './atributo.component';

describe('AtributoComponent', () => {
  let component: AtributoComponent;
  let fixture: ComponentFixture<AtributoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtributoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtributoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
