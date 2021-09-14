import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { MasterPageComponent } from './pages/master-page/master-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormComponent } from './components/form/form.component';
import { InputComponent } from './components/input/input.component';


@NgModule({
  declarations: [
    MasterPageComponent,
    NotFoundPageComponent,
    NavbarComponent,
    FormComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    MasterPageComponent,
    NotFoundPageComponent,
    NavbarComponent,
    FormComponent
  ]
})
export class SharedModule { }
