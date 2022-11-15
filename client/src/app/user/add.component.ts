import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-add',
  template: `
    <p>
      add works!
    </p>
  `,
  styles: [
  ],
  encapsulation: ViewEncapsulation.Emulated
})
export class AddComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
