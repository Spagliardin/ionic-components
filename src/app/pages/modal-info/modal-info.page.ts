import { ModalController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

  @Input() name: string
  @Input() country: string

  constructor(private modalCtrl : ModalController) { }

  ngOnInit() {
  }

  exitWhitoutArguments(){
    this.modalCtrl.dismiss();
  }

  exitWhitArguments(){
    this.modalCtrl.dismiss({
      name: 'Sofia',
      country: 'Argentina'
    });
  }

}
