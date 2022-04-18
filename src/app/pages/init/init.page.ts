import { DataService } from './../../services/data.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Components } from 'src/app/interfaces/interfaces';



@Component({
  selector: 'app-init',
  templateUrl: './init.page.html',
  styleUrls: ['./init.page.scss'],
})
export class InitPage implements OnInit {


  components: Observable<Components[]>;

  constructor(private menuCtrl: MenuController,
              private dataService: DataService) { }

  ngOnInit() {
    this.components = this.dataService.getMenu()
  }

  seeMenu(){
    this.menuCtrl.open()
  }

}
