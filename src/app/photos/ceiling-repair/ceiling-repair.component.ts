import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-ceiling-repair',
  templateUrl: './ceiling-repair.component.html',
  styleUrls: ['../photos/photos.component.css']
})
export class CeilingRepairComponent implements OnInit {

  constructor(private modalService: NgbModal) {}

  open(content) {
    this.modalService.open(content); }

  ngOnInit() {
  }

}
