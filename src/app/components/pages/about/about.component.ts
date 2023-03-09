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

    images = [1,2,14,15,16,5,6,9,21,11,23,24,12,13,17,18,7,8,19,20,3,4,10,22].map((n) => `assets/img/about/carousel/${n}.jpg`);

    constructor(config: NgbCarouselConfig) {
      config.interval = 2000;
      config.keyboard = true;
      config.pauseOnHover = true;
    }
}
