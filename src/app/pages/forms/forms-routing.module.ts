import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsComponent } from './forms.component';
import { FormInputsComponent } from './form-inputs/form-inputs.component';
import { FormLayoutsComponent } from './form-layouts/form-layouts.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ClientMasterComponent } from './client/client-master/client-master.component';
import { IpoMasterComponent } from './ipo/ipo-master/ipo-master.component';

const routes: Routes = [{
  path: '',
  component: FormsComponent,
  children: [
    {
      path: 'inputs',
      component: FormInputsComponent,
    },
    {
      path: 'layouts',
      component: FormLayoutsComponent,
    },
    {
      path: 'client',
      component: ClientMasterComponent,
    },
    {
      path: 'order',
      component: IpoMasterComponent,
    },
    {
      path: 'buttons',
      component: ButtonsComponent,
    },
    {
      path: 'datepicker',
      component: DatepickerComponent,
    },
  ],
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class FormsRoutingModule {

}

export const routedComponents = [
  FormsComponent,
  FormInputsComponent,
  FormLayoutsComponent,
  DatepickerComponent,
];
