import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  login={email:'volante@gmail.com', password:'1234'}

  constructor() { }
}
