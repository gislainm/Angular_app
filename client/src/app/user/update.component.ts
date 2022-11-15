import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-update',
  template: `
    <p>
      update works!
    </p>
  `,
  styles: [
  ],
  encapsulation: ViewEncapsulation.Emulated
})
export class UpdateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
