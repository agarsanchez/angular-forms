import {inject, TestBed} from '@angular/core/testing';

import {CustomerService} from './customer.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {Customer} from '../customer';

describe('CustomerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerService],
      imports: [
        HttpClientTestingModule
      ]
    });
  });

  it('should be created', inject([CustomerService], (service: CustomerService) => {
    expect(service).toBeTruthy();
  }));

  it('should return customer information',
    inject([CustomerService, HttpTestingController],
      (service: CustomerService, controller: HttpTestingController) => {

        const person: Customer = {
          'name': 'This is my name, bitch!',
          'addresses': [
            {
              'postcode': 'MK5 6ES',
              'street': 'Some Street'
            }
          ]
        };

        service.getCustomer().subscribe((customer) => {
          expect(customer).toEqual({
              'name': 'This is my name, bitch!',
              'addresses': [
                {
                  'postcode': 'MK5 6ES',
                  'street': 'Some Street'
                }
              ]
            }
          );
        }, fail);

        const req = controller.expectOne('./assets/customer.response.json');
        req.flush(person);

      }));
});
