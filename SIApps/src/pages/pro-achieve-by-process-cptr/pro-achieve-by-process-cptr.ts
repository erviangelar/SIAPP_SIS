import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';

import { PABPCPTRProAchieveByPitPage } from '../pabpcptr-pro-achieve-by-pit/pabpcptr-pro-achieve-by-pit';
import { PABPCPTRSumOfFleetAchievementPage } from '../pabpcptr-sum-of-fleet-achievement/pabpcptr-sum-of-fleet-achievement';
import { PABPCPTRGapBridgeLPAPage } from '../pabpcptr-gap-bridge-lpa/pabpcptr-gap-bridge-lpa';
import { PABPCPTRNumOfFleetEvaluationPage } from '../pabpcptr-num-of-fleet-evaluation/pabpcptr-num-of-fleet-evaluation';
import { PABPCPTREwhLoaderEvaluationPage } from '../pabpcptr-ewh-loader-evaluation/pabpcptr-ewh-loader-evaluation';
import { PABPCPTRProductivityEvaluationPage } from '../pabpcptr-productivity-evaluation/pabpcptr-productivity-evaluation';

@Component({
  selector: 'page-pro-achieve-by-process-cptr',
  templateUrl: 'pro-achieve-by-process-cptr.html'
})
export class ProAchieveByProcessCPTRPage {
  
  items: Array<{title: string, component: any}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App) {
  	this.items = [
      { title: 'Production Achievement By Pit', component: PABPCPTRProAchieveByPitPage },
      { title: 'Summary Of Fleet Achievement', component: PABPCPTRSumOfFleetAchievementPage },
      { title: 'Gap Bridge LPA', component: PABPCPTRGapBridgeLPAPage },
      { title: 'Number Of Fleet Evaluation', component: PABPCPTRNumOfFleetEvaluationPage },
      { title: 'EWH Loader Evaluation', component: PABPCPTREwhLoaderEvaluationPage },
      { title: 'Productivity Evaluation', component: PABPCPTRProductivityEvaluationPage }
    ];
  }

  ionViewDidLoad() {
    
  }

  itemSelected(item) {
    // this.navCtrl.push(item.component);
    this.app.getRootNav().push(item.component);
  }

}
