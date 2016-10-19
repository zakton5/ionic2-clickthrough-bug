import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { HomePage } from '../pages/home/home';
export var MyApp = (function () {
    function MyApp(platform) {
        this.rootPage = HomePage;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
        });
    }
    MyApp.decorators = [
        { type: Component, args: [{
                    template: "<ion-nav [root]=\"rootPage\"></ion-nav>"
                },] },
    ];
    /** @nocollapse */
    MyApp.ctorParameters = [
        { type: Platform, },
    ];
    return MyApp;
}());
