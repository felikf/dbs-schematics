import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

import { <%= classify(name) %>Service } from './services/<%= dasherize(name) %>/<%= dasherize(name) %>.service';

import { <%= classify(name) %>Component } from './<%= dasherize(name) %>.component';

class FakeLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    return of({ });
  }
}

describe('<%= classify(name) %>Component', () => {
  let component: <%= classify(name) %>Component;
  let fixture: ComponentFixture<<%= classify(name) %>Component>;
  let service: <%= classify(name) %>Service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: FakeLoader }
        })
      ],
      providers: [
        {
          provide: <%= classify(name) %>Service,
          useValue: {
            get<%= classify(name) %>: () => of({}), // TODO mock
            getActionLinks: () => of([])
          }
        }
      ],
      declarations: [<%= classify(name) %>Component],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(<%= classify(name) %>Component);
    component = fixture.componentInstance;
    service = TestBed.get(<%= classify(name) %>Service);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize data', () => {
    expect(component.data).toBeFalsy();
    fixture.detectChanges();
    expect(component.data).toBeTruthy();
    expect(component.data).toEqual({}); // TODO mock
  });

  it('should initialize sections', () => {
    expect(component.itemsLeft).toBeFalsy();
    expect(component.itemsRight).toBeFalsy();
    fixture.detectChanges();
    expect(component.itemsLeft).toBeTruthy();
    expect(component.itemsRight).toBeTruthy();
  });

  it('should initialize actions', () => {
    expect(component.actionLinks$).toBeFalsy();
    fixture.detectChanges();
    expect(component.actionLinks$).toBeTruthy();
  });
});
