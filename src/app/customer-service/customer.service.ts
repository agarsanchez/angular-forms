import {Injectable} from '@angular/core';
import {Customer} from '../customer';
import {Observable} from 'rxjs/index';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) {
  }

  public getCustomer(): Observable<any> {
    return this.http.get('./assets/customer.response.json');
  }

  public setCustomer(customer: Customer): void {
    console.log('Storing customer data on system: ...');
    console.log(JSON.stringify(customer));
  }
}
