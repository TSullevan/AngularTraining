import { Component, OnInit } from '@angular/core';
import InputModel from 'src/app/shared/components/input/input.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public nameInput: InputModel = new InputModel();

  constructor() {
    this.nameInput = new InputModel().AsName();
  }

  ngOnInit(): void {
  }

}
