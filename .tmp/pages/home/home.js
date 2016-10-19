import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { MyModal } from '../modal/modal';
export var HomePage = (function () {
    function HomePage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
    }
    HomePage.prototype.showModal = function () {
        this.modalCtrl.create(MyModal).present();
    };
    HomePage.decorators = [
        { type: Component, args: [{
                    selector: 'page-home',
                    templateUrl: 'home.html'
                },] },
    ];
    /** @nocollapse */
    HomePage.ctorParameters = [
        { type: NavController, },
        { type: ModalController, },
    ];
    return HomePage;
}());
