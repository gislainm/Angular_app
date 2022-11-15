import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <p>
      login works!
    </p>
  `,
  styles: [
  ],
  encapsulation: ViewEncapsulation.Emulated
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
