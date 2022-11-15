import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from './user.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  login(user: IUser) {
    return this.http.post(environment.server + '/users/login', {})
  }

  signup(formData: FormData) {
    return this.http.post(environment.server + '/users/signup', formData)
  }
}
