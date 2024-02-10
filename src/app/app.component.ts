import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public readonly translate: TranslateService) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');

    // remove comment if you want to use the browserr lang as a default lang
    //  const browserLang = translate.getBrowserLang();
    // translate.use(browserLang?.match(/en|fr/) ? browserLang : 'en');
  }
}
