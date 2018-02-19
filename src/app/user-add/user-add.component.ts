import { Component } from '@angular/core';
import { Users } from "../users";
import { UsersService } from "../users.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})

export class UserAddComponent {


  public user: Users = new Users;

  constructor(
    private usersService: UsersService,
    private router: Router
  ) { }

  save(users: Users){
    users.id = Math.floor(Math.random() * 10000000000000000) + 1;
    this.usersService.addUser(users).subscribe(() => {
      this.router.navigate(['/crud']);
    })
  }

}
