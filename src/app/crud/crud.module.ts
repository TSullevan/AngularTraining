import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudRoutingModule } from './crud-routing.module';
import { CrudPageComponent } from './pages/crud-page/crud-page.component';
import { CreateComponent } from './components/create/create.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CrudPageComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    CrudRoutingModule,
    SharedModule
  ]
})
export class CrudModule { }
