import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cmp-components',
  template: `
    <p>
      components works!
    </p>

    <clt-client></clt-client>
  `,
  styles: []
})
export class ComponentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
