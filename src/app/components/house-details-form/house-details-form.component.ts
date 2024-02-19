import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

type DefaultForm = {
  firstName: string;
  lastName: string;
  email: string;
};

@Component({
  selector: 'app-house-details-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <section class="listing-apply">
      <h2 class="section-heading">Apply now to live here</h2>
      <form [formGroup]="applyForm" (submit)="submitApplication($event)">
        <label for="first-name">First Name</label>
        <input id="first-name" type="text" formControlName="firstName" />

        <label for="last-name">Last Name</label>
        <input id="last-name" type="text" formControlName="lastName" />

        <label for="email">Email</label>
        <input id="email" type="email" formControlName="email" />
        <button class="text-white bg-main rounded-md px-6 py-4">
          Apply now
        </button>
      </form>
    </section>
  `,
  styles: `
    .listing-apply .section-heading {
      font-size: 18pt;
      margin-bottom: 15px;
    }

    label,
    input {
      display: block;
    }
    label {
      font-weight: bold;
      text-transform: uppercase;
      font-size: 12pt;
    }
    input {
      font-size: 16pt;
      margin-bottom: 15px;
      padding: 10px;
      width: 400px;
      border-top: none;
      border-right: none;
      border-left: none;
      border-bottom: solid 0.3px;
    }
    @media (max-width: 1024px) {
      .listing-photo {
        width: 100%;
        height: 400px;
      }
    }
    button {
      color: #fff;
    }
    .invalid-input {
      border: 2px solid red;
    }
  `,
})
export class HouseDetailsFormComponent {
  private formBuilder = inject(FormBuilder);

  data: DefaultForm = (() => {
    const state: DefaultForm = JSON.parse(
      localStorage.getItem('applyForm') || '{}',
    );
    return state;
  })();

  applyForm = this.formBuilder.group({
    firstName: [this.data.firstName, [Validators.required]],
    lastName: [this.data.lastName, [Validators.required]],
    email: [this.data.email, [Validators.required, Validators.email]],
  });

  submitApplication = (event: Event) => {
    event.preventDefault();
    if (this.applyForm.invalid) return;

    this.saveToLocalStorage();

    alert(
      `${this.applyForm.value.firstName}, ${this.applyForm.value.lastName}, ${this.applyForm.value.email} `,
    );

    this.applyForm.reset();
  };

  saveToLocalStorage = () => {
    localStorage.setItem('applyForm', JSON.stringify(this.applyForm.value));
  };
}
