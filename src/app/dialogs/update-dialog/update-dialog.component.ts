import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Contact } from 'src/app/interfaces/contact';

@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.scss']
})
export class UpdateDialogComponent implements OnInit {
  
  updateForm = new FormGroup({
    firstName: new FormControl('Initial value', [Validators.required, Validators.maxLength(50)]),
    lastName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    phoneNumber: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    address: new FormControl('', [Validators.required, Validators.maxLength(200)])
  });
    contactToUpdate!: Contact
    constructor(@Inject(MAT_DIALOG_DATA) public data: Contact) {
      this.contactToUpdate = data;
    }
  ngOnInit() {
    console.log(this.contactToUpdate);
  }

  onCancel() {

  }

  onSubmit() {
    
  }
}
