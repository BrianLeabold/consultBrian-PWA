import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-solar-shower',
  templateUrl: './solar-shower.component.html',
  styleUrls: ['./solar-shower.component.css']
})
export class SolarShowerComponent implements OnInit {

  title = 'Recycle, Reduce, Reuse - Part 2 - Consult Brian';
  constructor(private titleService: Title, private meta: Meta) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.meta.updateTag({ name: 'author', content: 'Consult Brian' }, 'name="author"');
    this.meta.updateTag({ name: 'description', content: 'Are you looking for a way to lower your impact on our environment?' +
    'Use the power of the sun to generate your hot water.' }, 'name="description"');
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
