import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-live-show',
  providers: [NgbCarouselConfig],
  templateUrl: './live-show.component.html',
  styleUrls: ['./live-show.component.scss']
})
export class LiveShowComponent {

    images = [1,2,3,4,5,6,7,8,9,10,11,12].map((n) => `assets/img/live-show/carousel/${n}.jpeg`);

    constructor(config: NgbCarouselConfig) {
      config.interval = 2000;
      config.keyboard = true;
      config.pauseOnHover = true;
    }
}
