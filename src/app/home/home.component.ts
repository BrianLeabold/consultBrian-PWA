import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Home - Consult Brian';
  constructor(private titleService: Title, private meta: Meta) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.meta.updateTag({ name: 'author', content: 'Consult Brian' }, 'name="author"');
    this.meta.updateTag({ name: 'description', content: 'I started swinging a hammer the summer after I turned 12.' +
    ' Nailing down plywood sub-floor by hand, side by side with my grand-dad and my father,' +
    ' is a fond memory that has fueled my love of construction' }, 'name="description"');
    this.meta.addTags([
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:site', content: '@consultbriansd'},
      {name: 'twitter:creator', content: '@consultbriansd'},
      {property: 'og:url', content: 'https://consultbrian.com'},
      {property: 'og:title', content: 'Home - Consult Brian'},
      {property: 'og image', content: 'https://consultbrian.com/assets/images/me_1.jpg'}
    ]);
  }

}
