import { Repos } from './repos';
import { User } from './user';
import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  gUser: User;
  allRepos: Repos;

  constructor(private http: HttpClient) {
    this.gUser = new User('', '', 0, 0, 0, new Date());
    this.allRepos = new Repos('', 0, '', '', 0, '', new Date());
  }

  searchUSer(searchName: string) {
    interface Responce {
      created_at: Date;
      login: string;
      public_repos: number;
      followers: number;
      following: number;
      avatar_url: string;
    }

    return new Promise((resolve, reject) => {
      this.http
        .get<Responce>(
          'https://api.github.com/users/' +
            searchName +
            '?access_token=' +
            environment.apiKey
        )
        .toPromise()
        .then(
          (result) => {
            this.gUser = result;
            console.log(this.gUser);
            resolve();
          },
          (error) => {
            console.log(error);
            reject();
          }
        );
    });
  }
  getRepos(searchName) {
    interface Repos {
      login: string;
      public_repos: number;
      name: string;
      repos: number;
      description: string;
      forks: number;

      language: string;
      created_at: Date;
    }
    return new Promise((resolve, reject) => {
      this.http
        .get<Repos>(
          'https://api.github.com/users/' +
            searchName +
            '/repos?order=created&sort=asc?access_token=' +
            environment.apiKey
        )
        .toPromise()
        .then(
          (results) => {
            this.allRepos = results;
            resolve();
          },
          (error) => {
            console.log(error);
            reject();
          }
        );
    });
  }
}
