import { NgModule } from '@angular/core';
import { ClientModule } from 'client';

import { ComponentsComponent } from './components.component';

@NgModule({
  imports: [
    ClientModule
  ],
  declarations: [ComponentsComponent],
  exports: [ComponentsComponent]
})
export class ComponentsModule { }
