import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { SideMenuPage } from '../side-menu/side-menu';

@Component({
  selector: 'page-manage-account',
  templateUrl: 'manage-account.html'
})
export class ManageAccountPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    // console.log('ionViewDidLoad ManageAccountPage');
  }

  undo() {
    this.navCtrl.setRoot(SideMenuPage);
    //this.app.getRootNav().setRoot(SideMenuPage);
  }

}
