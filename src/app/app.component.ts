import { Component } from '@angular/core';

import { DynamicModule } from './dynamic.module';
import { ControlFactoryDirective } from './control-factory.directive'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formTemplate = {
    "form_id": "1",
    "form_name": "My Test Form",
    form_fields: [
      {
        "field_id": 1,
        "field_title": "Forenames",
        "field_type": "textfield",
        "field_value": "John",
        "field_required": true,
        "field_disabled": false
      },
      {
        "field_id": 2,
        "field_title": "Last Name",
        "field_type": "textfield",
        "field_value": "Doe",
        "field_required": true,
        "field_disabled": false
      },
      {
        "field_id": 3,
        "field_title": "Gender",
        "field_type": "radio",
        "field_value": "2",
        "field_required": true,
        "field_disabled": false,
        "field_options": [
          {
            "option_id": 1,
            "option_title": "Male",
            "option_value": 1
          },
          {
            "option_id": 2,
            "option_title": "Female",
            "option_value": 2
          }
        ]
      },
      {
        "field_id": 4,
        "field_title": "Email Address",
        "field_type": "email",
        "field_value": "test@example.com",
        "field_required": true,
        "field_disabled": false
      },
      {
        "field_id": 5,
        "field_title": "Password",
        "field_type": "password",
        "field_value": "ShowMe!",
        "field_required": true,
        "field_disabled": false
      },
      {
        "field_id": 6,
        "field_title": "Birth Date",
        "field_type": "date",
        "field_value": "11/01/1980",
        "field_required": true,
        "field_disabled": false
      },
      {
        "field_id": 7,
        "field_title": "Your browser",
        "field_type": "dropdown",
        "field_value": "2",
        "field_required": false,
        "field_disabled": false,
        "field_options": [
          {
            "option_id": 1,
            "option_title": "-- Please Select --",
            "option_value": 1
          },
          {
            "option_id": 2,
            "option_title": "Internet Explorer",
            "option_value": 2
          },
          {
            "option_id": 3,
            "option_title": "Google Chrome",
            "option_value": 3
          },
          {
            "option_id": 4,
            "option_title": "Mozilla Firefox",
            "option_value": 4
          }
        ]
      },
      {
        "field_id": 8,
        "field_title": "Additional Comments",
        "field_type": "textarea",
        "field_value": "Please type here..",
        "field_required": false,
        "field_disabled": false
      },
      {
        "field_id": 9,
        "field_title": "I accept the terms and conditions.",
        "field_type": "checkbox",
        "field_value": true,
        "field_required": true, //can't use "1"/"0" as they're truthys
        "field_disabled": false
      },
      {
        "field_id": 10,
        "field_title": "I have a secret.",
        "field_type": "hidden",
        "field_value": "X",
        "field_required": false,
        "field_disabled": false
      }
    ]
  }

  submit() {
    alert(1);
  }
}