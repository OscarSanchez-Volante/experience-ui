import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InviteService {
  invite: { firstname: string; lastname: string; email: string|number; };

  constructor() { }
}
