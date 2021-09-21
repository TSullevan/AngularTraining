import { Component, OnInit } from '@angular/core';
import { FormService } from '../../../shared/http-services/form.service';
import UserView from '../../models/user.model';


@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

  public user: UserView = new UserView();

  constructor(private formService: FormService) { }

  ngOnInit(): void {
  }

  public doGetRequest() {
    this.formService.sendGetRequest<UserView>('User', 1).subscribe(
      response => this.user = response
    );
  }

  public clear() {
    this.user = null;
  }
}
