import { Observable } from 'rxjs';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  superHeroes: Observable<any>
  publisher: string = ''

  constructor(private dataServise: DataService) { }

  ngOnInit() {
    this.superHeroes = this.dataServise.getHeroes()
  }

  segmentChanged(ev: any){
    console.log(ev)

    if (ev.detail.value === 'todos') {
      return this.publisher = ''
    }
    
    this.publisher = ev.detail.value
  }

}
