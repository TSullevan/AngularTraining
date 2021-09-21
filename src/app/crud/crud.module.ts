import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudRoutingModule } from './crud-routing.module';
import { CrudPageComponent } from './pages/crud-page/crud-page.component';
import { CreateComponent } from './components/create/create.component';
import { SharedModule } from '../shared/shared.module';
import { GetComponent } from './components/get/get.component';
import { ListComponent } from './components/list/list.component';


@NgModule({
  declarations: [
    CrudPageComponent,
    CreateComponent,
    GetComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    CrudRoutingModule,
    SharedModule
  ]
})
export class CrudModule { }
