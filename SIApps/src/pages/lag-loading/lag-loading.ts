import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

// import { ManageAccountPage } from '../manage-account/manage-account';

@Component({
  selector: 'page-lag-loading',
  templateUrl: 'lag-loading.html'
})
export class LagLoadingPage {
  //page1: any = LagLoadingPage;
  // page2: any = ManageAccountPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LagLoadingPage');
  }

}
