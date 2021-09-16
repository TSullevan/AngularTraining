import { Component, Input, OnInit } from '@angular/core';
import FormModel from 'src/app/shared/components/form/form.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  @Input() form: FormModel = new FormModel();

  constructor() {
    this.form.asCreateUser();
   }

  ngOnInit(): void {
  }

}
