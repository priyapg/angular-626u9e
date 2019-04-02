import { Component,Input } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  //@Input() name:string='Angular';
  name = 'Angular';
  onLogoClicked(){
    alert("Welcome to Angular");

  }
  onKeyUp(value){
    this.name=value;
  }
}
