import {Component, OnInit, ViewChild} from '@angular/core';
import {Customer, FormularService} from './formular.service';
import notify from 'devextreme/ui/notify';
import {DxFormComponent} from 'devextreme-angular';

const sendRequest = function(value) {
  const validEmail = "test@dx-email.com";
  return new Promise((resolve) => {
    setTimeout(function() {
      resolve(value === validEmail);
    }, 1000);
  });
}

@Component({
  selector: 'app-formular',
  templateUrl: './formular.component.html',
  styleUrls: ['./formular.component.scss']
})
export class FormularComponent {

  @ViewChild(DxFormComponent, { static: false }) form: DxFormComponent
  password = '';
  passwordOptions: any = {
    mode: 'password',
    value: this.password
  };
  customer: Customer;
  countries: string[];
  cities: string[];
  maxDate: Date = new Date();
  cityPattern = '^[^0-9]+$';
  namePattern: any = /^[^0-9]+$/;
  phonePattern: any = /^\+\s*1\s*\(\s*[02-9]\d{2}\)\s*\d{3}\s*-\s*\d{4}$/;
  phoneRules: any = {
    X: /[02-9]/
  };
  buttonOptions: any = {
    text: 'Register',
    type: 'success',
    useSubmitBehavior: true
  };
  passwordComparison = () => {
    return this.form.instance.option('formData').Password;
  }
  checkComparison() {
    return true;
  }
  constructor(service: FormularService) {
    this.maxDate = new Date(this.maxDate.setFullYear(this.maxDate.getFullYear() - 21));
    this.countries = service.getCountries();
    this.cities = service.getCities();
    this.customer = service.getCustomer();
  }
  asyncValidation(params) {
    return sendRequest(params.value);
  }
  onFormSubmit = function(e) {
    notify({
      message: 'You have submitted the form',
      position: {
        my: 'center top',
        at: 'center top'
      }
    }, 'success', 3000);

    e.preventDefault();
  };
}
