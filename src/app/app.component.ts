import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Customer} from './customer';
import {CustomerService} from './customer-service/customer.service';
import {AddressFormGroup} from './address/address.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  public myForm: FormGroup;

  constructor(private _fb: FormBuilder, private cs: CustomerService) {
    this.myForm = new AppComponentFormGroup(_fb);
  }

  ngOnInit() {
    // we will initialize our form here
    this.cs.getCustomer().subscribe((customer: Customer) => {
      this.myForm.patchValue({name: customer.name});
      this.myForm.patchValue({addresses: customer.addresses});
    });
  }

  addAddress() {
    const control = <FormArray>this.myForm.controls['addresses'];
    control.push(new AddressFormGroup());
  }

  removeAddress(i: number) {
    const control = <FormArray>this.myForm.controls['addresses'];
    control.removeAt(i);
  }

  save(model: Customer) {
    this.cs.setCustomer(model);
  }
}

export class AppComponentFormGroup extends FormGroup {

  constructor(_fb: FormBuilder) {

    super({
      'name': _fb.control('', [Validators.required, Validators.minLength(5)]),
      'addresses': _fb.array([new AddressFormGroup()])
    });
  }
}
