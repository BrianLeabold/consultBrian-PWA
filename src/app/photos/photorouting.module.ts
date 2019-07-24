import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyservicesComponent } from '../myservices/myservices.component';
import { ContactComponent } from '../contact/contact.component';
import { CompostingTolietComponent } from '../news/composting-toliet/composting-toliet.component';
import { from } from 'rxjs';

const  routes: Routes  = [
  {path: 'services', component: MyservicesComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'whats-new/composting-toilet', component: CompostingTolietComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
  })
export class PhotoRoutingModule { }
