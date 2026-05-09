import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar-two',
  templateUrl: './navbar-two.component.html',
  styleUrls: ['./navbar-two.component.scss']
})
export class NavbarTwoComponent implements OnInit {

  lang = '';
  icon_it ='🇮🇹';
  icon_en ='🇬🇧';
  icon = "false";
  constructor(public translate: TranslateService) {
    translate.addLangs(['en','it']);

    this.lang = localStorage.getItem('lang') || 'en';
    translate.setDefaultLang(this.lang);
    if (localStorage.getItem('lang')=='en'){
        this.lang = 'en 🇬🇧' + this.icon_en;
    } else {
        this.lang = 'it' + this.icon_it;
    }
  }

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang') || 'en';
    this.translate.currentLang = this.lang;
    if (localStorage.getItem('lang')=='en'){
        this.lang = 'en 🇬🇧' + this.icon_en;
    } else {
        this.lang = 'it' + this.icon_it;
    }
  }

  switchLang(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);

  }
  switchLang2(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);

  }
}
