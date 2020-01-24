import { Component, OnInit } from '@angular/core';
import { ContactService } from '../shared/contact.service';
import { NgForm } from '@angular/forms';
declare var M: any;

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
  providers: [ContactService]
})
export class ContactListComponent implements OnInit {

  constructor(private contactService: ContactService) { }

  ngOnInit() {
  }

  onSubmit() {
    alert('dcdjdndl')
    this.contactService.postContact().subscribe((res) => {
      M.toast({ html: 'Saved successfully', classes: 'rounded' })
    })
  }

}
