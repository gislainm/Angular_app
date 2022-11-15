import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-list',
  template: `
    <p>
      list works!
    </p>
  `,
  styles: [
  ],
  encapsulation: ViewEncapsulation.Emulated
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
