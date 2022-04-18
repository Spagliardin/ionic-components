import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {

  progress: number = 0.05

  constructor() { }

  ngOnInit() {
  }

  rangeChange(e: any){
    console.log(e.detail.value)

    this.progress = e.detail.value / 100

  }

}
