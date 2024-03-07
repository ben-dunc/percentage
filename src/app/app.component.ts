import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fade', [
      state('visible', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('visible <=> hidden', animate('1000ms ease-in-out')),
    ]),
    trigger('fadeSlow', [
      state('visible', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('visible <=> hidden', animate('1000ms ease-in-out')),
    ]),
  ],
})
export class AppComponent {
  title = 'percentage';
  targetPer = 78;
  showPerNum = 0;
  showPerStr: string = "   ";
  description: string = "   ";
  isTextVisible = false;
  isDescVisible = false;
  textHue: number = 0;

  ngOnInit() {
    this.animatePer();
  }

  async animatePer() {
    await this.delay(1000);
    this.showPerStr = "00%";
    this.description = "of Ben is feeling good about marrying Sage!"
    this.isTextVisible = true;
    while (this.showPerNum < this.targetPer) {
      this.showPerNum++;
      this.showPerStr = this.showPerNum + "%";
      if (this.showPerStr.length == 2)
        this.showPerStr = "0" + this.showPerStr;
      const d = this.calcDelay(this.targetPer - this.showPerNum)

      this.textHue = Math.round(110 * (this.showPerNum / this.targetPer))

      await this.delay(d);
    }
    await this.delay(500);
    this.isDescVisible = true;
  }

  calcDelay(difference: number): number {
    return Math.min(400, (1500 / difference));
  }

  delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
