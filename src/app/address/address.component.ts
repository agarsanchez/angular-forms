import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  // we will pass in address from App component
  @Input('group')
  public adressForm: FormGroup;

  constructor() {
  }

  ngOnInit() {
  }

}
