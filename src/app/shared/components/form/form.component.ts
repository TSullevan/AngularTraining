import { Component, Input, OnInit } from '@angular/core';
import { FormService } from '../../http-services/form.service';
import FormModel from './form.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() model: FormModel = new FormModel();
  constructor(private service: FormService) { }

  ngOnInit(): void {
  }

  public sendRequest(): void {

    let inputs = this.model.inputs;
    
    let user = {
      Name: 'nome',
      Cpf: '23441221',
      Telephone1: '3124312443',
      Telephone2: '14312'
    }

    this.service.sendCreateRequest('user', user).subscribe();
  }
}
