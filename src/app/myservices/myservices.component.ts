import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-myservices',
  templateUrl: './myservices.component.html',
  styleUrls: ['./myservices.component.css']
})
export class MyservicesComponent implements OnInit {

  title = 'Consult Brian - Services';
  constructor(private titleService: Title, private meta: Meta) { }

  ngOnInit() {

    this.titleService.setTitle(this.title);
    this.meta.updateTag({ name: 'author', content: 'Consult Brian' }, 'name="author"');
    this.meta.updateTag({ name: 'description', content: 'Its never easy managing large projects. By setting up timelines and goals;'
    + ' while only billing you my actual time, you will save money over using a GC.' }, 'name="description"');
    this.meta.addTags([
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:site', content: '@consultbriansd'},
      {name: 'twitter:creator', content: '@consultbriansd'},
      {property: 'og:url', content: 'https://consultbrian.com/services'},
      {property: 'og:title', content: 'Contact me today for your free estimate.'},
      {property: 'og image', content: 'https://consultbrian.com/assets/images/site-plan-drawing-cropped.jpg'}
    ]);
  }

}
