import { Component, OnInit } from '@angular/core';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  name: string;
  email: string;
  subject: string;
  message: string;

  isSubmitted = false;
  isSent = false;
  isLoading = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.isLoading = true;
    const templateParams = {
      name: this.name,
      email: this.email,
      subject: this.subject,
      message: this.message
    };

    emailjs.send('service_y7lx0mh', 'template_9b5hfcg', templateParams, 'bC2Jvkp01NYOWql-V')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        this.isSent = true;
        this.isSubmitted = true;
        this.name = '';
        this.email = '';
        this.subject = '';
        this.message = '';
        this.isLoading = false;
      }, (err) => {
        this.isSent = false;
        this.isSubmitted = true;
        this.isLoading = false;
        console.log('FAILED...', err);
      });
  }
}
