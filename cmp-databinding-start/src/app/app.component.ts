import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumebrs: number[]=[];
  evenNumebrs: number[]=[];

  onIntervalFierd(firedNumber: number){
    if (firedNumber % 2 === 0){
      this.evenNumebrs.push(firedNumber);
    }else{
      console.log(firedNumber)
      this.oddNumebrs.push(firedNumber);
    }
  }
}
