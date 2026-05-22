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

    images = [
      'PAVIMENTO FERTILE-106.jpg',
      'PAVIMENTO FERTILE-117.jpg',
      'PAVIMENTO FERTILE-12.jpg',
      'PAVIMENTO FERTILE-121.jpg',
      'PAVIMENTO FERTILE-122.jpg',
      'PAVIMENTO FERTILE-131.jpg',
      'PAVIMENTO FERTILE-138.jpg',
      'PAVIMENTO FERTILE-148.jpg',
      'PAVIMENTO FERTILE-151.jpg',
      'PAVIMENTO FERTILE-153.jpg',
      'PAVIMENTO FERTILE-160.jpg',
      'PAVIMENTO FERTILE-162.jpg',
      'PAVIMENTO FERTILE-164.jpg',
      'PAVIMENTO FERTILE-166.jpg',
      'PAVIMENTO FERTILE-167.jpg',
      'PAVIMENTO FERTILE-169.jpg',
      'PAVIMENTO FERTILE-170.jpg',
      'PAVIMENTO FERTILE-177.jpg',
      'PAVIMENTO FERTILE-202.jpg',
      'PAVIMENTO FERTILE-210.jpg',
      'PAVIMENTO FERTILE-214.jpg',
      'PAVIMENTO FERTILE-217.jpg',
      'PAVIMENTO FERTILE-239.jpg',
      'PAVIMENTO FERTILE-242.jpg',
      'PAVIMENTO FERTILE-243.jpg',
      'PAVIMENTO FERTILE-244.jpg',
      'PAVIMENTO FERTILE-246.jpg',
      'PAVIMENTO FERTILE-250.jpg',
      'PAVIMENTO FERTILE-252.jpg',
      'PAVIMENTO FERTILE-267.jpg',
      'PAVIMENTO FERTILE-270.jpg',
      'PAVIMENTO FERTILE-275.jpg',
      'PAVIMENTO FERTILE-276.jpg',
      'PAVIMENTO FERTILE-278.jpg',
      'PAVIMENTO FERTILE-279.jpg',
      'PAVIMENTO FERTILE-284.jpg',
      'PAVIMENTO FERTILE-286.jpg',
      'PAVIMENTO FERTILE-287.jpg',
      'PAVIMENTO FERTILE-289.jpg',
      'PAVIMENTO FERTILE-290.jpg',
      'PAVIMENTO FERTILE-291.jpg',
      'PAVIMENTO FERTILE-292.jpg',
      'PAVIMENTO FERTILE-293.jpg',
      'PAVIMENTO FERTILE-41.jpg',
      'PAVIMENTO FERTILE-43.jpg',
      'PAVIMENTO FERTILE-45.jpg',
      'PAVIMENTO FERTILE-50.jpg',
      'PAVIMENTO FERTILE-52.jpg',
      'PAVIMENTO FERTILE-53.jpg',
      'PAVIMENTO FERTILE-58.jpg',
      'PAVIMENTO FERTILE-59.jpg',
      'PAVIMENTO FERTILE-60.jpg',
      'PAVIMENTO FERTILE-63.jpg',
      'PAVIMENTO FERTILE-64.jpg',
      'PAVIMENTO FERTILE-83.jpg',
      'PAVIMENTO FERTILE-94.jpg',
      'PAVIMENTO FERTILE-99.jpg',
    ].map((file) => `assets/img/about/carousel/${file}`);
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
