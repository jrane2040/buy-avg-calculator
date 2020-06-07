import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public result: number;
  public currentInvestedValue: number;
  public investingValue: number;
  public currentPrice: number;
  public currentUnits: number;
  public buyPrice: number;
  public buyUnits: number;

  public calculate() {
    if(this.currentPrice && this.currentUnits && this.buyPrice && this.buyUnits) {
      this.result = Number(Number(this.currentPrice)*Number(this.currentUnits) + Number(this.buyPrice)*Number(this.buyUnits)) / Number(Number(this.currentUnits) + Number(this.buyUnits));
      console.log(this.result);
    } else {
      this.result = null
    }
    if(this.currentPrice && this.currentUnits) {
      this.currentInvestedValue = this.currentPrice*this.currentPrice
    } else {
      this.currentInvestedValue = null
    }
    if(this.buyPrice && this.buyUnits) {
      this.investingValue = this.buyUnits*this.buyUnits
    } else {
      this.investingValue = null;
    }
  }

}
