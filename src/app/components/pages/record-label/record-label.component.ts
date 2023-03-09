import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-record-label',
  providers: [NgbCarouselConfig],
  templateUrl: './record-label.component.html',
  styleUrls: ['./record-label.component.scss']
})
export class RecordLabelComponent implements OnInit {

  ngOnInit(): void {
  }

  showMore:boolean=false;
  images = ["BACK", "FRONT"].map((n) => `assets/img/record-label/${n}.jpg`);

  constructor(config: NgbCarouselConfig) {
    config.interval = 8000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }



}
