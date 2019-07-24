import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css']
})
export class PrivacyComponent implements OnInit {

  title = 'Consult Brian - Privacy Policy';
  constructor(private titleService: Title, private meta: Meta) { }

  ngOnInit() {

    this.titleService.setTitle(this.title);
    this.meta.updateTag({ name: 'author', content: 'Consult Brian' }, 'name="author"');
    this.meta.updateTag({ name: 'description', content: 'We do not track user location,' +
    ' nor sell user information to third parties.'}, 'name="description"');
    this.meta.addTags([
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:site', content: '@consultbriansd'},
      {name: 'twitter:creator', content: '@consultbriansd'},
      {property: 'og:url', content: 'https://consultbrian.com/privacy'},
      {property: 'og:title', content: 'We do not track user location, nor sell user information to third parties.'},
      {property: 'og image', content: 'https://consultbrian.com/assets/images/BHSlogo.png'}
    ]);
  }

}
