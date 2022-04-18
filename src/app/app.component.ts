import { Observable } from 'rxjs';
import { DataService } from './services/data.service';
import { Component, OnInit } from '@angular/core';
import { Components } from './interfaces/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{

  components: Observable<Components[]>;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.components = this.dataService.getMenu()
  }

}
