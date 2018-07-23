import { Component, OnInit } from '@angular/core';
import { BaseComponent } from './base.component';

@Component({
  selector: 'clt-client',
  template: `
    <p>
      client works! value: {{value}}
    </p>
  `,
  styles: []
})
export class ClientComponent extends BaseComponent<string> implements OnInit {

  constructor() {
    super('Hallo');
   }

  ngOnInit() {
  }

}
