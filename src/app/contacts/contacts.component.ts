import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../services/contacts.service';
import { Contact } from '../interfaces/contact';
import { MatDialog } from '@angular/material/dialog';
import { UpdateDialogComponent } from '../dialogs/update-dialog/update-dialog.component';
import { DeleteDialogComponent } from '../dialogs/delete-dialog/delete-dialog.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  contactDataArray: Contact [] =[];
  dataSource = new MatTableDataSource<Contact>();
  columnsToDisplay = ['FirstName', 'LastName', 'PhoneNumber','Address','Update','Delete'];
  constructor(private contactService: ContactsService, private dialog: MatDialog) {

  }

  ngOnInit() {
    this.contactDataArray = this.contactService.getContacts();
    this.dataSource = new MatTableDataSource<Contact>(this.contactDataArray);
    console.log(this.contactDataArray);
  }

  onUpdate(contact: Contact) {
    let dialogRef = this.dialog.open(UpdateDialogComponent, {
      height: '500px',
      width: '500px',
      data: contact
    });
  }

  onDelete(contact: Contact) {
    let dialogRef = this.dialog.open(DeleteDialogComponent, {
      height: '500px',
      width: '500px',
      data: contact
    });

    dialogRef.afterClosed().subscribe(result => {
      this.updateDataSource(this.contactDataArray);
    });
  }

  updateDataSource(dataArray: Contact[]) {
    this.dataSource.connect().next(dataArray);
  }
}
