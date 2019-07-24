import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-extpaintkensington',
  templateUrl: './extpaintkensington.component.html',
  styleUrls: ['../photos/photos.component.css']
})
export class ExtpaintkensingtonComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  open(content) {
    this.modalService.open(content); }

  ngOnInit() {
  }

}
