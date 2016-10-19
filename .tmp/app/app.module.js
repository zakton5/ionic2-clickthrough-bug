import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { MyModal } from '../pages/modal/modal';
import { HomePage } from '../pages/home/home';
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        MyApp,
                        HomePage,
                        MyModal
                    ],
                    imports: [
                        IonicModule.forRoot(MyApp)
                    ],
                    bootstrap: [IonicApp],
                    entryComponents: [
                        MyApp,
                        HomePage,
                        MyModal
                    ],
                    providers: []
                },] },
    ];
    /** @nocollapse */
    AppModule.ctorParameters = [];
    return AppModule;
}());
