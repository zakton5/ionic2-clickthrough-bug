import { Component } from '@angular/core';

import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'my-modal',
  templateUrl: 'modal.html'
})
export class MyModal {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {

  }

  public dismiss() {
    this.viewCtrl.dismiss();
  }

}
