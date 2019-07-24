import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-composting-toliet',
  templateUrl: './composting-toliet.component.html',
  styleUrls: ['./composting-toliet.component.css']
})
export class CompostingTolietComponent implements OnInit {

  title = 'Recycle, Reduce, Reuse - Part 1 - Consult Brian';
  constructor(private titleService: Title, private meta: Meta) { }

  ngOnInit() {

    this.titleService.setTitle(this.title);
    this.meta.updateTag({ name: 'author', content: 'Consult Brian' }, 'name="author"');
    this.meta.updateTag({ name: 'description', content: 'After one Google search,' +
    ' I found this super simple composting toilet. ' }, 'name="description"');
    this.meta.addTags([
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:site', content: '@consultbriansd'},
      {name: 'twitter:creator', content: '@consultbriansd'},
      {property: 'og:url', content: 'https://consultbrian.com/news'},
      {property: 'og:title', content: 'Recycle, Reduce, Reuse - Part 1 - @ConsultBrianSD'},
      {property: 'og image', content: 'https://consultbrian.com/assets/images/compost_toilet-9.jpg'}
    ]);
  }

}
