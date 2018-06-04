import {Component, Input} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent {

  @Input('group')
  public group: FormGroup;

  constructor() {
    this.group = new AddressFormGroup();
  }
}

export class AddressFormGroup extends FormGroup {

  constructor() {
    super({
      'street': new FormControl('', Validators.required),
      'postcode': new FormControl('', Validators.required)
    });
  }

}
