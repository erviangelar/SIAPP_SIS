import { Component, ViewChild } from '@angular/core';
import { Nav, NavController, NavParams, App, Platform } from 'ionic-angular';

import { ManageAccountPage } from '../manage-account/manage-account';
import { LoginPage } from '../login/login';
import { TabsMenuPage } from '../tabs-menu/tabs-menu';

@Component({
  selector: 'page-side-menu',
  templateUrl: 'side-menu.html'
})
export class SideMenuPage {
  
  @ViewChild(Nav) nav: Nav;

  rootPage: any = TabsMenuPage;

  pages: Array<{title: string, component: any}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform, public app: App) {
  	// this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Manage Account', component: ManageAccountPage },
      { title: 'Logout', component: LoginPage }
    ];
  }

  // initializeApp() {
  //   this.platform.ready().then(() => {
  //     // Okay, so the platform is ready and our plugins are available.
  //     // Here you can do any higher level native things you might need.
  //     StatusBar.styleDefault();
  //     Splashscreen.hide();
  //   });
  // }

  openPage(page) {
    this.app.getRootNav().setRoot(page.component);
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad SideMenuPage');
  }

}
