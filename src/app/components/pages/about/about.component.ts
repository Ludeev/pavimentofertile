import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  providers: [NgbCarouselConfig],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy {

    /*images = [
      {title: 'First Slide', short: 'First Slide Short', src: "https://picsum.photos/id/700/900/500"},
      {title: 'Second Slide', short: 'Second Slide Short', src: "https://picsum.photos/id/1011/900/500"},
      {title: 'Third Slide', short: 'Third Slide Short', src: "https://picsum.photos/id/984/900/500"}
    ];*/

    images = [2,16,5,6,9,21,11,23,1,24,12,13,17,18,7,8,19,20,3,4,10,22].map((n) => `assets/img/about/carousel/${n}.jpg`);
    recordSlide = 0;
    private recordSlideInterval: any;
    translate: any;
    constructor(
        config: NgbCarouselConfig,
        translate: TranslateService
        ) {
      config.interval = 2000;
      config.keyboard = true;
      config.pauseOnHover = true;
      this.translate = translate;
    }

    ngOnInit() {
      this.recordSlideInterval = setInterval(() => {
        this.recordSlide = this.recordSlide === 0 ? 1 : 0;
      }, 5000);
    }

    ngOnDestroy() {
      clearInterval(this.recordSlideInterval);
    }
}
