import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  signup={institutionname:'volante', firstname:'abc', lastname: 'xyz', email: 'volante@gmail.com',"password":"test"}
  constructor() { }
}
