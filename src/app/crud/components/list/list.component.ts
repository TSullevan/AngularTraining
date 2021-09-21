import { Component, OnInit } from '@angular/core';
import { FormService } from '../../../shared/http-services/form.service';
import { UserView } from '../../models/user.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public userList: Array<UserView> = new Array<UserView>();

  constructor(private formService: FormService) { }

  ngOnInit(): void {
  }

  public fetchUserList(): void {
    let query = { name: 'Enzo'};
    this.formService.sendListRequest<Array<UserView>>('user', query).subscribe( response => this.userList = response);
  }

}
