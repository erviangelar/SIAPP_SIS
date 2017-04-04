import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ProAchieveByProcessTabsPage } from '../pro-achieve-by-process-obr/pro-achieve-by-process-obr';
import { LagIndicatorTabsPage } from '../lag-indicator/lag-indicator';
import { LeadIndicatorPage } from '../lead-indicator/lead-indicator';

@Component({
  selector: 'page-tabs-menu',
  templateUrl: 'tabs-menu.html'
})
export class TabsMenuPage {

  page1: any = ProAchieveByProcessTabsPage;
  page2: any = LagIndicatorTabsPage;
  page3: any = LeadIndicatorPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsMenuPage');
  }

}
