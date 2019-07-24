import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  title = 'Consult Brian - Photos';
  constructor(private modalService: NgbModal, private titleService: Title, private meta: Meta) { }

  open(content) {
    this.modalService.open(content); }

  ngOnInit() {

    this.titleService.setTitle(this.title);
    this.meta.updateTag({ name: 'author', content: 'Consult Brian' }, 'name="author"');
    this.meta.updateTag({ name: 'description', content: 'Photos of current and recent projects' }, 'name="description"');
    this.meta.addTags([
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:site', content: '@consultbriansd'},
      {name: 'twitter:creator', content: '@consultbriansd'},
      {property: 'og:url', content: 'https://consultbrian.com/photos'},
      {property: 'og:title', content: 'Photos of current and recent projects'},
      {property: 'og image', content: 'https://consultbrian.com/assets/images/mod/flagstone_2.jpg'}
    ]);
  }

}
