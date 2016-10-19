import { NavController, ViewController } from 'ionic-angular';
export declare class MyModal {
    navCtrl: NavController;
    viewCtrl: ViewController;
    constructor(navCtrl: NavController, viewCtrl: ViewController);
    dismiss(): void;
}
