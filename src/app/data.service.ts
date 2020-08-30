import { User } from './user';
import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  user: User;
  constructor(private http: HttpClient) {}
  searchUser(searchName: any) {
    interface data {
      user: any;
    }

    let promise = new Promise((resolve, reject) => {
      this.http
        .get<data>(
          'https://api.github.com/users/robajillo?access_token=' +
            environment.apiKey
        )
        .toPromise()
        .then(
          (response) => {
            this.user.user = response.user;

            resolve();
          },
          (error) => {
            reject(error);
          }
        );
    });
    return promise;
  }
}
