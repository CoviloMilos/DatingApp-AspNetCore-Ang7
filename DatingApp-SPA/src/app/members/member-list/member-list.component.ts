import { UserService } from './../../_services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/user';
import { AlertifyService } from '../../_services/alertify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  users: User[] = [];
  temp: User[];
  constructor(private userService: UserService,
              private alertify: AlertifyService,
              private route: ActivatedRoute) { }

  // Testing purposes. Change this. Also add {{photoUrl}} at member-card
  ngOnInit() {
    // DB 2 has first testing data so use this you know where.
    /*this.route.data.subscribe(data => {
      data['users'].forEach((element: User) => {
        if(element.photoUrl != null)
          this.users.push(element);
      });
    });*/

    this.route.data.subscribe(data => {
      this.users = data['users'];
    });
  }

  /*loadUsers() {
    this.userService.getUsers()
    .subscribe(
      (users: User[]) => {
        this.users = users;
      },
      (error) => {
        this.alertify.error(error);
      }
    );
  }*/
}
