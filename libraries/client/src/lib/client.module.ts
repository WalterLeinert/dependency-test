import { NgModule } from '@angular/core';
import { ClientComponent } from './client.component';

import { CoreModule } from 'core';

@NgModule({
  imports: [
    CoreModule
  ],
  declarations: [ClientComponent],
  exports: [ClientComponent]
})
export class ClientModule { }
