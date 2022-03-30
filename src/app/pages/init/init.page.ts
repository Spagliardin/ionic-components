import { Component, OnInit } from '@angular/core';

interface Components {
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-init',
  templateUrl: './init.page.html',
  styleUrls: ['./init.page.scss'],
})
export class InitPage implements OnInit {


  components: Components[] = [
    {
      icon:'american-football-sharp',
      name: 'action sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon:'logo-apple-appstore',
      name: 'alert',
      redirectTo: '/alert'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
