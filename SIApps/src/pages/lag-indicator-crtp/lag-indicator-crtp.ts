import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';

import { POBPCRTPProAchieveByPitPage } from '../pobpcrtp-pro-achieve-by-pit/pobpcrtp-pro-achieve-by-pit';
import { POBPCRTPGapBridgeLPAPage } from '../pobpcrtp-gap-bridge-lpa/pobpcrtp-gap-bridge-lpa';
import { POBPCRTPEwhTrailerByPitPage } from '../pobpcrtp-ewh-trailer-by-pit/pobpcrtp-ewh-trailer-by-pit';
import { POBPCRTPProductivityEvaluationPage } from '../pobpcrtp-productivity-evaluation/pobpcrtp-productivity-evaluation';

@Component({
  selector: 'page-lag-indicator-crtp',
  templateUrl: 'lag-indicator-crtp.html'
})
export class LagIndicatorCRTPPage {
  
  items: Array<{title: string, component: any}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App) {
  	this.items = [
      { title: 'Production Achievement By Pit', component: POBPCRTPProAchieveByPitPage },
      { title: 'Gap Bridge LPA', component: POBPCRTPGapBridgeLPAPage },
      { title: 'EWH Trailer By Pit', component: POBPCRTPEwhTrailerByPitPage },
      { title: 'Productivity Evaluation', component: POBPCRTPProductivityEvaluationPage }
    ];
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad LagIndicatorCRTPPage');
  }

  itemSelected(item) {
    // this.navCtrl.push(item.component);
    this.app.getRootNav().push(item.component);
  }

}
