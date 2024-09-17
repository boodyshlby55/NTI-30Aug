import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  users: any[] = [];
  constructor(private _UsersService: UsersService) { }

  ngOnInit(): void {
    this.users = this._UsersService.users;
    console.log(this.users);
  }

}
