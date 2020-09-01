import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { Repos } from './../repos';
@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css'],
})
export class RepositoriesComponent implements OnInit {
  repo: Repos;
  constructor(public repoService: DataService) {}

  repoSearch(searchName) {
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
    this.repoSearch('robajillo');
  }
}
