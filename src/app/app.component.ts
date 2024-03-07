import { Component } from '@angular/core';
import { delay } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'percentage';
  targetPer = 75;
  showPerNum = 0;
  showPerStr: string = "";


  ngOnInit() {
    this.animatePer();
  }

  async animatePer() {
    await this.delay(1000);
    while (this.showPerNum < this.targetPer) {
      this.showPerNum++;
      this.showPerStr = this.showPerNum + "%";
      if (this.showPerStr.length == 2)
        this.showPerStr = "0" + this.showPerStr;
      const d = this.calcDelay(this.targetPer - this.showPerNum)
      await this.delay(d);
    }
  }

  calcDelay(difference: number): number {
    return Math.min(500, (2000 / difference));
  }

  delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
