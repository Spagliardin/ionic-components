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
      icon:'alert-circle-outline',
      name: 'alert',
      redirectTo: '/alert'
    },
    {
      icon:'beaker-outline',
      name: 'Avatar',
      redirectTo: '/avatar'
    },
    {
      icon:'radio-button-off-outline',
      name: 'button',
      redirectTo: '/button'
    },
    {
      icon:'card-outline',
      name: 'card',
      redirectTo: '/card'
    },
    {
      icon:'checkmark-circle-outline',
      name: 'check',
      redirectTo: '/check'
    },
    {
      icon:'calendar-outline',
      name: 'dateTime',
      redirectTo: '/date-time'
    },
    {
      icon:'car-outline',
      name: 'fab',
      redirectTo: '/fab'
    },
    {
      icon:'grid-outline',
      name: 'grid',
      redirectTo: '/grid'
    },
    {
      icon:'infinite-outline',
      name: 'infinite',
      redirectTo: '/infinite'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
