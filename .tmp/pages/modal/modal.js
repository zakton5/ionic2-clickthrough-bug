import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
export var MyModal = (function () {
    function MyModal(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    MyModal.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    MyModal.decorators = [
        { type: Component, args: [{
                    selector: 'my-modal',
                    templateUrl: 'modal.html'
                },] },
    ];
    /** @nocollapse */
    MyModal.ctorParameters = [
        { type: NavController, },
        { type: ViewController, },
    ];
    return MyModal;
}());
