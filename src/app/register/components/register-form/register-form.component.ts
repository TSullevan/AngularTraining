import { Component, OnInit } from '@angular/core';
import FormModel from 'src/app/shared/components/form/form.model';
import InputModel from 'src/app/shared/components/input/input.model';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  public registerForm: FormModel = new FormModel();
  constructor(){
    let inputName = new InputModel();

    inputName.asName();
    this.registerForm.inputs.push(inputName);

    this.registerForm.inputs.push(new InputModel().asCpf());
    
   }

  ngOnInit(): void {
  }

}
