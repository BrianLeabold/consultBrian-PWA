import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-garagekensington',
  templateUrl: './garagekensington.component.html',
  styleUrls: ['../photos/photos.component.css']
})
export class GaragekensingtonComponent implements OnInit {

  constructor(private modalService: NgbModal) {}

  open(content) {
    this.modalService.open(content); }

  ngOnInit() {
  }

}
