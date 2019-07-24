import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  title = 'Consult Brian - Here`s What`s New';
  constructor(private titleService: Title, private meta: Meta) { }

  ngOnInit() {

    this.titleService.setTitle(this.title);
    this.meta.updateTag({ name: 'author', content: 'Consult Brian' }, 'name="author"');
    this.meta.updateTag({ name: 'description', content: 'A wide variety of projects I am involved in,'
    + ' from remodeling to reducing our impact on our world.' }, 'name="description"');
    this.meta.addTags([
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:site', content: '@consultbriansd'},
      {name: 'twitter:creator', content: '@consultbriansd'},
      {property: 'og:url', content: 'https://consultbrian.com/news'},
      {property: 'og:title', content: 'A wide variety of projects I am involved in, from remodeling to reducing our impact on our world. '},
      {property: 'og image', content: 'https://consultbrian.com/assets/images/BHSlogo.png'}
    ]);
  }

}
