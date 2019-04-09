import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {
  
  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() appareilColor: string;
  @Input() bestScore = 9999999999999999999999999;

  getStatus() {
    return this.appareilStatus;
  }

  onChangeColor(e) {
    let r = this.getRandomColor();
    let g = this.getRandomColor(); 
    let b = this.getRandomColor();

    let counter = 0;

    while (r !== 255 || g !== 0 || b !== 0) {
      r = this.getRandomColor();
      g = this.getRandomColor();
      b = this.getRandomColor();

      counter ++;

      this.appareilColor = "rgb(" + r + ", " + g + ", " + b + ")";
    }

    this.bestScore = counter < this.bestScore ? counter : this.bestScore;

    console.clear();
    console.log(" r: " + r + " g: " + g + " b: " + b);
    console.log("counter : " + counter);
    console.log("bestScore : " + this.bestScore);
  }

  getRandomColor() {
    return Math.floor(Math.random() * 256);
  }

  getColor() {
    return this.appareilStatus === "allumé" ? "green" : "red";
  }

  constructor() { }
}