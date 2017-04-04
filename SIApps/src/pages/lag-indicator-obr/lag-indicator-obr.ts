import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';

import { PABPOBRProAchievementByPitPage } from '../pabpobr-pro-achievement-by-pit/pabpobr-pro-achievement-by-pit';
import { PABPOBRSumOfFleetAchievementPage } from '../pabpobr-sum-of-fleet-achievement/pabpobr-sum-of-fleet-achievement';
import { PABPOBRGapBridgeLPAPage } from '../pabpobr-gap-bridge-lpa/pabpobr-gap-bridge-lpa';
import { PABPOBRNumOfFleetEvaluationPage } from '../pabpobr-num-of-fleet-evaluation/pabpobr-num-of-fleet-evaluation';
import { PABPOBREwhLoaderEvaluationPage } from '../pabpobr-ewh-loader-evaluation/pabpobr-ewh-loader-evaluation';
import { PABPOBRProductivityEvaluationPage } from '../pabpobr-productivity-evaluation/pabpobr-productivity-evaluation';

@Component({
  selector: 'page-lag-indicator-obr',
  templateUrl: 'lag-indicator-obr.html'
})
export class LagIndicatorOBRPage {
  
  items: Array<{title: string, component: any}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App) {
  	this.items = [
      { title: 'Production Achievement By Pit', component: PABPOBRProAchievementByPitPage },
      { title: 'Summary Of Fleet Achievement', component: PABPOBRSumOfFleetAchievementPage },
      { title: 'Gap Bridge LPA', component: PABPOBRGapBridgeLPAPage },
      { title: 'Number Of Fleet Evaluation', component: PABPOBRNumOfFleetEvaluationPage },
      { title: 'EWH Loader Evaluation', component: PABPOBREwhLoaderEvaluationPage },
      { title: 'Productivity Evaluation', component: PABPOBRProductivityEvaluationPage }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LagIndicatorOBRPage');
  }

  itemSelected(item) {
    // this.navCtrl.push(item.component);
    this.app.getRootNav().push(item.component);
  }

}
