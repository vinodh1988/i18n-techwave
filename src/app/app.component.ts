import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name =""
  
  lang="english"
  constructor(private ts:TranslateService){
         this.ts.use(this.lang);
  }

  changeLang(){
    this.ts.use(this.lang)
  }
}
