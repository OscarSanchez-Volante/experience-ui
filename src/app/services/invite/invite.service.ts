import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InviteService {
  invite: { firstname: any; lastname: any; email: any; };

  constructor() { }
}
