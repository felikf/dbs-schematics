import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { MOCK_STORE } from '@core/test/mock-store';
import { BackendService, CreateUrlFunction } from '@core/services/backend/backend.service';

import { <%= classify(name) %>Service } from './<%= dasherize(name) %>.service';

describe('<%= classify(name) %>Service', () => {
  let service: <%= classify(name) %>Service;
  let backend: BackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        <%= classify(name) %>Service,
        {
          provide: BackendService, useValue: {
            getProductData: (createUrlFn: CreateUrlFunction) => {
              if (createUrlFn('1').includes('someUrl')) {
                return of({});
              }
              else {
                return of({});
              }
            }
          }
        },
        { provide: Store, useValue: MOCK_STORE }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });

    service = TestBed.get(<%= classify(name) %>Service);
    backend = TestBed.get(BackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#get<%= classify(name) %> should fetch data', done => {
    service.get<%= classify(name) %>().subscribe(data => {
      expect(data).toEqual({});
      done();
    });
  });
});
