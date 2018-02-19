import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from "../users.service";
import { User } from "../user";

@Component({
  selector: 'app-user-detal',
  templateUrl: './user-detal.component.html',
  styleUrls: ['./user-detal.component.css']
})
export class UserDetalComponent implements OnInit {

  public user: User;

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService

  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.usersService.getUser(id).subscribe(user =>{
      this.user = user;
    })
  }

}
