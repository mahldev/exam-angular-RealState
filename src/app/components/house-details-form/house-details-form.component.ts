import { Component, Input, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HouseService } from '@services';

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

        <div class="flex gap-3">
          <h1>Evaluate:</h1>
          <select formControlName="score">
            <option value="0" selected>0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <button class="text-white bg-main rounded-md px-6 py-4 mt-3">
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
  private houseService = inject(HouseService);

  @Input() houseId: number | undefined = undefined;

  data: DefaultForm = (() => {
    const state: DefaultForm = JSON.parse(
      localStorage.getItem('applyForm') || '{}',
    );
    return state;
  })();

  applyForm = this.formBuilder.group({
    firstName: [this.data.firstName, [Validators.required]],
    lastName: [this.data.lastName, [Validators.required]],
    email: [this.data.email, [Validators.required]],
    score: [0, [Validators.required]],
  });

  submitApplication = (event: Event) => {
    event.preventDefault();
    if (this.applyForm.invalid) return;
    if (!this.houseId) return;

    this.saveCredentialsToLocalStorage();

    this.houseService.changeScoreStatic(
      this.houseId,
      this.applyForm.value.score as number,
    );

    this.applyForm.reset();
  };

  saveCredentialsToLocalStorage = () => {
    localStorage.setItem('applyForm', JSON.stringify(this.applyForm.value));
  };
}
