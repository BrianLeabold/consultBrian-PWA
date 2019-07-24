import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-granny-flats',
  templateUrl: './granny-flats.component.html',
  styleUrls: ['./granny-flats.component.css']
})
export class GrannyFlatsComponent implements OnInit {

  title = 'San Diego County Waives Permit Fees - Consult Brian';
  constructor(private titleService: Title, private meta: Meta) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.meta.updateTag({ name: 'author', content: 'Consult Brian' }, 'name="author"');
    this.meta.updateTag({ name: 'description', content: 'The San Diego County Board of Supervisors voted unanimously' +
    ' in an attempt to fight the affordable housing crisis.' }, 'name="description"');
    this.meta.addTags([
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:site', content: '@consultbriansd'},
      {name: 'twitter:creator', content: '@consultbriansd'},
      {property: 'og:url', content: 'https://consultbrian.com/news'},
      {property: 'og:title', content: 'Recycle, Reduce, Reuse - Part 2 - @ConsultBrianSD'},
      {property: 'og image', content: 'https://consultbrian.com/assets/images/solarshower/solarshower-3.jpg'}
    ]);
  }

}
