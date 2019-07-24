import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ContactService } from '../contact.service';
import { Contact } from './Contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  title = 'Consult Brian - Contact Form';
  topics = ['A free consultation', 'New Construction', 'Remodeling', 'Planning', 'Other'];
  contactModel = new Contact ('', '', '', '', '', '', 'evening', false);
  submitted = false;
  errorMsg = '';
  successMsg = '';

  constructor(private contact: ContactService, private titleService: Title, private meta: Meta) { }

  onSubmit() {
    this.submitted = true;
    this.contact.contactUser(this.contactModel)
    .subscribe(
      data => this.successMsg = 'Thank you for your interest. I will be in touch shortly. Have a great day.',
      error => this.errorMsg = error.statusText
    );
  }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.meta.updateTag({ name: 'author', content: 'Consult Brian' }, 'name="author"');
    this.meta.updateTag({ name: 'description', content: 'Fill out this form or call me to set a meeting.' }, 'name="description"');
    this.meta.addTags([
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:site', content: '@consultbriansd'},
      {name: 'twitter:creator', content: '@consultbriansd'},
      {property: 'og:url', content: 'https://consultbrian.com/contact'},
      {property: 'og:title', content: 'Contact me today for your free estimate.'},
      {property: 'og image', content: 'https://consultbrian.com/assets/images/BHSlogo.png'}
    ]);
  }

}
