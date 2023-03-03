import { Component, ViewChild } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-about',
  providers: [NgbCarouselConfig],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent{

    /*images = [
      {title: 'First Slide', short: 'First Slide Short', src: "https://picsum.photos/id/700/900/500"},
      {title: 'Second Slide', short: 'Second Slide Short', src: "https://picsum.photos/id/1011/900/500"},
      {title: 'Third Slide', short: 'Third Slide Short', src: "https://picsum.photos/id/984/900/500"}
    ];*/

    images = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24].map((n) => `assets/img/about/carousel/${n}.jpg`);

    constructor(config: NgbCarouselConfig) {
      config.interval = 2000;
      config.keyboard = true;
      config.pauseOnHover = true;
    }
}
