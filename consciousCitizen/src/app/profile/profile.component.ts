import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  public isEditingMode = false;
  private defaultPerson = {
    firstName: 'Михаил',
    lastName: 'Грушенков',
    middleName: 'Андреевич',
    email: 'grushenkov.m@gmail.com',
    phone: '+79027426436',
    city: 'Самара',
    street: 'Московское шоссе',
    house: '34Б',
    apartment: '304',
    login: '',
    password: '',
    newPassword: '',
  };

  public personForm = new FormGroup({
    firstName: new FormControl(
      { value: '', disabled: !this.isEditingMode },
      Validators.required
    ),
    lastName: new FormControl(
      { value: '', disabled: !this.isEditingMode },
      Validators.required
    ),
    middleName: new FormControl(
      { value: '', disabled: !this.isEditingMode },
      Validators.required
    ),
    email: new FormControl(
      { value: '', disabled: !this.isEditingMode },
      Validators.required
    ),
    phone: new FormControl(
      { value: '', disabled: !this.isEditingMode },
      Validators.required
    ),
    city: new FormControl(
      { value: '', disabled: !this.isEditingMode },
      Validators.required
    ),
    street: new FormControl(
      { value: '', disabled: !this.isEditingMode },
      Validators.required
    ),
    house: new FormControl(
      { value: '', disabled: !this.isEditingMode },
      Validators.required
    ),
    apartment: new FormControl(
      { value: '', disabled: !this.isEditingMode },
      Validators.required
    ),
    login: new FormControl(
      { value: '', disabled: !this.isEditingMode },
      Validators.required
    ),
    password: new FormControl(
      { value: '', disabled: !this.isEditingMode },
      Validators.required
    ),
    newPassword: new FormControl({ value: '' }, Validators.required),
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.personForm.patchValue(this.defaultPerson);
  }

  public modeChanged() {
    this.isEditingMode = !this.isEditingMode;
    if (this.isEditingMode) {
      this.personForm.enable();
    } else {
      this.personForm.disable();
    }
  }

  public submitForm() {
    // Process checkout data here
    // console.warn('Your order has been submitted', this.personForm.value);
    this.personForm.reset();
    this.modeChanged();
  }

  //   public get firstName() {
  //     return this.firstNameInternal;
  //   }

  //   public set firstName(value: string) {
  //     this.firstNameInternal = value;
  //   }

  //   public get lastName() {
  //     return this.lastNameInternal;
  //   }

  //   public set lastName(value: string) {
  //     this.lastNameInternal = value;
  //   }
  //   public get middleName() {
  //     return this.middleNameInternal;
  //   }

  //   public set middleName(value: string) {
  //     this.middleNameInternal = value;
  //   }
  //   public get email() {
  //     return this.emailInternal;
  //   }

  //   public set email(value: string) {
  //     this.emailInternal = value;
  //   }
  //   public get phone() {
  //     return this.phoneInternal;
  //   }

  //   public set phone(value: string) {
  //     this.phoneInternal = value;
  //   }
  //   public get city() {
  //     return this.cityInternal;
  //   }

  //   public set city(value: string) {
  //     this.cityInternal = value;
  //   }
  //   public get street() {
  //     return this.streetInternal;
  //   }

  //   public set street(value: string) {
  //     this.streetInternal = value;
  //   }
  //   public get house() {
  //     return this.houseInternal;
  //   }

  //   public set house(value: string) {
  //     this.houseInternal = value;
  //   }
  //   public get apartment() {
  //     return this.apartmentInternal;
  //   }

  //   public set apartment(value: string) {
  //     this.apartmentInternal = value;
  //   }
}
