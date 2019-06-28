import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MatTableModule } from '@angular/material';
import { Observable, of, throwError } from 'rxjs';

import { <%= classify(name) %>Service } from './services/<%= dasherize(name) %>.service';

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
        MatTableModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: FakeLoader }
        })
      ],
      providers: [
        {
          provide: <%= classify(name) %>Service,
          useValue: {
            get<%= classify(name) %>: () => of({}), // TODO
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
    expect(component.dataSource).toBeFalsy();
    fixture.detectChanges();
    expect(component.data).toBeTruthy();
    expect(component.data).toEqual({}); // TODO
    expect(component.dataSource).toBeTruthy();
    expect(component.dataSource.data.length).toBe(1); // TODO
  });

  it('should initialize data loaded flag', () => {
    expect(component.dataLoaded).toBeFalsy();
    fixture.detectChanges();
    expect(component.dataLoaded).toBeTruthy();
  });

  it('should initialize data loaded flag when error', () => {
    spyOn(service, 'get<%= classify(name) %>').and.returnValue(throwError('Backend Error'));
    expect(component.dataLoaded).toBeFalsy();
    expect(component.isError).toBeFalsy();
    fixture.detectChanges();
    expect(component.dataLoaded).toBeTruthy();
    expect(component.isError).toBeTruthy();
  });

  it('should initialize displayed columns', () => {
    expect(component.displayedColumns.length).toBe(2);
  });
});
