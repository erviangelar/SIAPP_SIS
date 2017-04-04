import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { SideMenuPage } from '../side-menu/side-menu';
// import { ProAchieveByProcessTabsPage } from '../pro-achieve-by-process-obr/pro-achieve-by-process-obr';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    // console.log('ionViewDidLoad LoginPage');
  }

  openHome() {
  	this.navCtrl.setRoot(SideMenuPage);
  }

}
