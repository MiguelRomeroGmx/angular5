import { Component, OnInit } from '@angular/core';
import {UsersService} from "../users.service";
import { Users } from "../users";


@Component({
  selector: 'app-user-crud',
  templateUrl: './user-crud.component.html',
  styleUrls: ['./user-crud.component.css']
})
export class UserCrudComponent implements OnInit {

  public users: User[];
  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.usersService.getUsers().subscribe(users =>{
      this.users = users;
    })
  }

  remove(user: User){
    console.log(user);
  }

}
