import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';

import { PABPOBRBSSumOfFleetAchievementPage } from '../pabpobrbs-sum-of-fleet-achievement/pabpobrbs-sum-of-fleet-achievement';
import { PABPOBRBSNumOfFleetEvaluationPage } from '../pabpobrbs-num-of-fleet-evaluation/pabpobrbs-num-of-fleet-evaluation';
import { PABPOBRBSEwhLoaderEvaluationPage } from '../pabpobrbs-ewh-loader-evaluation/pabpobrbs-ewh-loader-evaluation';
import { PABPOBRBSFleetProductionAchievementPage } from '../pabpobrbs-fleet-production-achievement/pabpobrbs-fleet-production-achievement';
import { PABPOBRBSProductivityEvaluationPage } from '../pabpobrbs-productivity-evaluation/pabpobrbs-productivity-evaluation';

@Component({
  selector: 'page-lag-indicator-obrbs',
  templateUrl: 'lag-indicator-obrbs.html'
})
export class LagIndicatorOBRBSPage {
  
  items: Array<{title: string, component: any}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App) {
  	this.items = [
      { title: 'Summary Of Fleet Achievement', component: PABPOBRBSSumOfFleetAchievementPage },
      { title: 'Number Of Fleet Evaluation', component: PABPOBRBSNumOfFleetEvaluationPage },
      { title: 'EWH Loader Evaluation', component: PABPOBRBSEwhLoaderEvaluationPage },
      { title: 'Fleet Production Achievement', component: PABPOBRBSFleetProductionAchievementPage },
      { title: 'productivity Evaluation', component: PABPOBRBSProductivityEvaluationPage }
    ];
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad LagIndicatorOBRBSPage');
  }

  itemSelected(item) {
    // this.navCtrl.push(item.component);
    this.app.getRootNav().push(item.component);
  }

}
