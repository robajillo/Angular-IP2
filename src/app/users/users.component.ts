import { Repos } from './../repos';
import { User } from './../user';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  user: User;
  repo: Repos;
  constructor(public Service: DataService, private repoService: DataService) {}

  searchs(searchName) {
    this.Service.searchUSer(searchName).then(
      (success) => {
        this.user = this.Service.gUser;
      },
      (error) => {
        console.log(error);
      }
    );
    this.repoService.getRepos(searchName).then(
      (results) => {
        this.repo = this.repoService.allRepos;
        console.log(this.repo);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.searchs('robajillo');
  }
}
