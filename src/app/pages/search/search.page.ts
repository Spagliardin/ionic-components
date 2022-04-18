import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  array: any[] = []
  textSearch: string = ''

  constructor(private dataService: DataService) { }

  ngOnInit() {

     this.dataService.getSearchs().subscribe( (res: any) => {
      this.array = res
     })
  }

  onSearchChange(ev: any){
    this.textSearch = ev.detail.value
  }

}
