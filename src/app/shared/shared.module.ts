import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { MasterPageComponent } from './pages/master-page/master-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormComponent } from './components/form/form.component';
import { InputComponent } from './components/input/input.component';
import { FormsModule } from '@angular/forms';
import { AbbreviatePipe } from './pipes/abbreviate.pipe';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    MasterPageComponent,
    NotFoundPageComponent,
    NavbarComponent,
    FormComponent,
    InputComponent,
    AbbreviatePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SharedRoutingModule
  ],
  exports: [
    MasterPageComponent,
    NotFoundPageComponent,
    NavbarComponent,
    FormComponent,
    InputComponent,
    AbbreviatePipe
  ]
})
export class SharedModule { }
