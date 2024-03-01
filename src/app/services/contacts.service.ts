import { Injectable } from '@angular/core';
import { Contact } from '../interfaces/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  contacts: Contact[] = [
    {Id: 1, FirstName: 'Laxman', LastName: 'Warpe', PhoneNumber: '98203020', Address: 'B733, Porwal Road, Mumbai'},
    {Id: 2, FirstName: 'Mahi', LastName: 'Warpe', PhoneNumber: '88203020', Address: 'B7343, Porwal Road, Pune'},
    {Id: 3, FirstName: 'Keshav', LastName: 'Ambad', PhoneNumber: '77203020', Address: 'A733, Porwal Road, Beed'}

  ]

  constructor() { }

  getContacts() {
    return this.contacts;
  }

  updateContacts(newcontact: Contact) {

    let heighestId = 0;
    this.contacts.forEach(contactObj => {
      if(contactObj.Id > heighestId) {
        heighestId = contactObj.Id;
      }
    })

    this.contacts.push(
      {
        Id: heighestId + 1,
        FirstName: newcontact.FirstName,
        LastName: newcontact.LastName,
        PhoneNumber: newcontact.PhoneNumber,
        Address: newcontact.Address
      }
      );
  }
}
