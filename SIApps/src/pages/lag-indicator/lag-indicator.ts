import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { LagIndicatorOBRPage } from '../lag-indicator-obr/lag-indicator-obr';
import { LagIndicatorOBRBSPage } from '../lag-indicator-obrbs/lag-indicator-obrbs';
import { LagIndicatorCPTRPage } from '../lag-indicator-cptr/lag-indicator-cptr';
import { LagIndicatorCRTPPage } from '../lag-indicator-crtp/lag-indicator-crtp';


@Component({
  selector: 'page-lag-indicator',
  templateUrl: 'lag-indicator.html'
})
export class LagIndicatorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LagIndicatorPage');
  }

}


@Component({
 template: `
 <ion-tabs tabsPlacement="bottom">
    <ion-tab [root]="tab1" tabTitle="OB Removal"></ion-tab>
    <ion-tab [root]="tab2" tabTitle="OBR By Site"></ion-tab>
    <ion-tab [root]="tab3" tabTitle="Coal PTR"></ion-tab>
    <ion-tab [root]="tab4" tabTitle="Coal RTP"></ion-tab>
 </ion-tabs>
  `
})
export class LagIndicatorTabsPage {
  
  tab1: any = LagIndicatorOBRPage;
  tab2: any = LagIndicatorOBRBSPage;
  tab3: any = LagIndicatorCPTRPage;
  tab4: any = LagIndicatorCRTPPage;

  constructor() {
    
  }
}

