import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';

import { ProAchieveByProcessCPTRPage } from '../pro-achieve-by-process-cptr/pro-achieve-by-process-cptr';
// import { ProAchieveByProcessSRPage } from '../pro-achieve-by-process-sr/pro-achieve-by-process-sr';
import { ProAchieveByProcessCRTPPage } from '../pro-achieve-by-process-crtp/pro-achieve-by-process-crtp';
import { ProAchieveByProcessOBRBSPage } from '../pro-achieve-by-process-obrbs/pro-achieve-by-process-obrbs';

import { PABPOBRProAchievementByPitPage } from '../pabpobr-pro-achievement-by-pit/pabpobr-pro-achievement-by-pit';
import { PABPOBRSumOfFleetAchievementPage } from '../pabpobr-sum-of-fleet-achievement/pabpobr-sum-of-fleet-achievement';
import { PABPOBRGapBridgeLPAPage } from '../pabpobr-gap-bridge-lpa/pabpobr-gap-bridge-lpa';
import { PABPOBRNumOfFleetEvaluationPage } from '../pabpobr-num-of-fleet-evaluation/pabpobr-num-of-fleet-evaluation';
import { PABPOBREwhLoaderEvaluationPage } from '../pabpobr-ewh-loader-evaluation/pabpobr-ewh-loader-evaluation';
import { PABPOBRProductivityEvaluationPage } from '../pabpobr-productivity-evaluation/pabpobr-productivity-evaluation';


@Component({
  selector: 'page-pro-achieve-by-process-obr',
  templateUrl: 'pro-achieve-by-process-obr.html'
})
export class ProAchieveByProcessOBRPage {

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
    // console.log('ionViewDidLoad ProAchieveByProcessOBRPage');
  }

  itemSelected(item) {
    // this.navCtrl.push(item.component);
    this.app.getRootNav().push(item.component);
  }

}


@Component({
 template: `
 <ion-tabs tabsPlacement="bottom">
    <ion-tab [root]="tab1" tabTitle="OB Removal" tabIcon=""></ion-tab>
    <ion-tab [root]="tab2" tabTitle="OBR By Site"></ion-tab>
    <ion-tab [root]="tab3" tabTitle="Coal PTR"></ion-tab>
    <ion-tab [root]="tab4" tabTitle="Coal RTP"></ion-tab>
 </ion-tabs>
  `
})
export class ProAchieveByProcessTabsPage {
  
  tab1: any = ProAchieveByProcessOBRPage;
  tab2: any = ProAchieveByProcessOBRBSPage;
  tab3: any = ProAchieveByProcessCPTRPage;
  tab4: any = ProAchieveByProcessCRTPPage;

  constructor() {
    
  }
}

