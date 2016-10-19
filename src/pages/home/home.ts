import { Component } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';

import { MyModal } from '../modal/modal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  public showModal() {
    this.modalCtrl.create(MyModal).present();
  }

}
