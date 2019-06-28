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

  it('#getActionLinks should return actionsLink with replacements', done => {
    service.getActionLinks([{ code: 'CPS_TRANS.PAYMENT_ORDER', active: false, nonRealizableReason: '' }]).subscribe((data: any) => {
      expect(data).not.toBeUndefined();
      expect(data.length).toBe(1);
      expect(data[0].code).toBe('CPS_TRANS.PAYMENT_ORDER');
      expect(data[0].replacements).not.toBeUndefined();
      expect(Array.from(data[0].replacements.keys()).length).toBe(6);
      expect(data[0].replacements.get('User.Login')).toBe('userName');
      expect(data[0].replacements.get('Agreement.Number')).toBe('agreementNumber');
      expect(data[0].replacements.get('OnBehalfClient.Cluid')).toBe('TestOnBehalfCLUID');
      expect(data[0].replacements.get('Account.Owner.Cluid')).toBe('testOwnerId');
      expect(data[0].replacements.get('User.OrgUnitId')).toBe('branchCode');
      expect(data[0].replacements.get('User.DistributionChannel')).toBe('TestDistributionChannel');
      done();
    });
  });
});
