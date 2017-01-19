import { Component, Input } from '@angular/core';


@Component({
  selector: 'cbx-comp',
  templateUrl: '../templates/checkbox.template.html'
})
export class CheckboxComponent {
  @Input() model: any;
}

@Component({
  selector: 'tbx-comp',
  templateUrl: '../templates/textfield.template.html'
})
export class TextfieldComponent {
  @Input() model: any;
}

@Component({
  selector: 'ema-comp',
  templateUrl: '../templates/email.template.html'
})
export class EmailComponent {
  @Input() model: any;
}

@Component({
  selector: 'rdo-comp',
  templateUrl: '../templates/radio.template.html'
})
export class RadioComponent {
  @Input() model: any;
}

@Component({
  selector: 'pwd-comp',
  templateUrl: '../templates/password.template.html'
})
export class PasswordComponent {
  @Input() model: any;
}

@Component({
  selector: 'dte-comp',
  templateUrl: '../templates/datefield.template.html'
})
export class DatefieldComponent {
  @Input() model: any;
}

@Component({
  selector: 'ddl-comp',
  templateUrl: '../templates/dropdown.template.html'
})
export class DropdownComponent {
  @Input() model: any;
}

@Component({
  selector: 'mlt-comp',
  templateUrl: '../templates/textarea.template.html'
})
export class TextareaComponent {
  @Input() model: any;
}

@Component({
  selector: 'hid-comp',
  templateUrl: '../templates/hiddenfield.template.html'
})
export class HiddenComponent {
  @Input() model: any;
}

@Component({
  selector: 'cbx-list-comp',
  template: `CheckboxListComponent {{ model.data }}`
})
export class CheckboxListComponent {
  @Input() model: any;
}

@Component({
  selector: 'datepicker-comp',
  template: `DatePickerComponent {{ model.data }}`
})
export class DatePickerComponent {
  @Input() model: any;
}
