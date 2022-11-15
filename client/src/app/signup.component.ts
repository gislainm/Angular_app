import { Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-signup',
  template: `
    <h2 class="title is-2 has-text-centered has-text-link">Signup</h2>
    <form [formGroup]="form" (ngSubmit)="submit()" class="box column is-half is-offset-one-quarter">
      <div class="m-2">
        <label class="label mb-0">Fistname</label>
        <input placeholder="Firstname" formControlName="first_name" class="input mt-0"/>
      </div>
      <div class="m-2">
        <label class="label mb-0">Lastname</label>
        <input placeholder="Lastname" formControlName="last_name" class="input mt-0"/>
      </div>
      <div class="m-2">
        <label class="label mb-0">Email</label>
        <input placeholder="email" formControlName="email" class="input mt-0"/>
      </div>
      <div class="m-2">
        <label class="label mb-0">Password</label>
        <input placeholder="password" formControlName="password" type="password" class="input mt-0"/>
      </div>
      <div class="field m-2">
        <label class="label mb-0">Avatar</label>
        <div class="control mt-0">
          <input formControlName="avatar" type="file" class="input"
          (change) = "fileSelected($event)"
          />
        </div>
      </div>
      <button type="submit" class="button is-link m-2" [disabled]="form.invalid">Submit</button>
    </form>
  `,
  styles: [
  ],
  encapsulation: ViewEncapsulation.Emulated
})
export class SignupComponent implements OnInit {
  file!: File;
  form = inject(FormBuilder).nonNullable.group({
    email: ['', Validators.required],
    first_name: ['', Validators.required],
    last_name: ['', Validators.required],
    password: ['', Validators.required],
    avatar: ['', Validators.required],
  })

  constructor(private profileService: ProfileService, private router: Router) { }

  ngOnInit(): void {
  }
  submit() {
    const formData = new FormData()
    formData.append('email', this.form.get('email')!.value)
    formData.append('first_name', this.form.get('first_name')!.value)
    formData.append('last_name', this.form.get('last_name')!.value)
    formData.append('password', this.form.get('password')!.value)
    formData.append('avatar', this.file)
    this.profileService.signup(formData).subscribe(Response => {
      this.form.reset()
      this.router.navigate(['', 'login']);
    })
    // this.profileService.signup(formData).subscribe(response => {
    //   this.form.reset()
    //   this.router.navigate(['', 'login']);
    // })
  }
  fileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files!.length > 0) {
      this.file = input.files![0]
    }
  }

}
