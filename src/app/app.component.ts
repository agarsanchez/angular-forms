import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Customer} from './customer';
import {CustomerService} from './customer-service/customer.service';

@Component({
  // moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  public myForm: FormGroup;

  constructor(private _fb: FormBuilder, private cs: CustomerService) {
  }

  ngOnInit() {
    this.myForm = this._fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      addresses: this._fb.array([
        this.initAddress()
      ])
    });
    // we will initialize our form here
    this.cs.getCustomer().subscribe((customer: Customer) => {
      this.myForm.patchValue({name: customer.name});
      this.myForm.patchValue({addresses: customer.addresses});

    });
  }

  initAddress() {
    // initialize our address
    return this._fb.group({
      street: ['', Validators.required],
      postcode: ['', Validators.required]
    });
  }

  addAddress() {
    const control = <FormArray>this.myForm.controls['addresses'];
    control.push(this.initAddress());
  }

  removeAddress(i: number) {
    const control = <FormArray>this.myForm.controls['addresses'];
    control.removeAt(i);
  }

  save(model: Customer) {
    this.cs.setCustomer(model);
  }

}
