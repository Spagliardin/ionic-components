import { DataService } from './../../services/data.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild(IonList) ionList: IonList

  users: Observable<any>

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.users = this.dataService.getUsers()


  }

  favorite(item: any){
    console.log(item)
    this.ionList.closeSlidingItems()
  }
  
  share(item: any){
    console.log(item)
    this.ionList.closeSlidingItems()
  }

}
