import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';

import { PABPOBRProAchievementByPitPage } from '../pabpobr-pro-achievement-by-pit/pabpobr-pro-achievement-by-pit';
import { PABPOBRSumOfFleetAchievementPage } from '../pabpobr-sum-of-fleet-achievement/pabpobr-sum-of-fleet-achievement';
import { PABPOBRGapBridgeLPAPage } from '../pabpobr-gap-bridge-lpa/pabpobr-gap-bridge-lpa';
import { PABPOBRNumOfFleetEvaluationPage } from '../pabpobr-num-of-fleet-evaluation/pabpobr-num-of-fleet-evaluation';
import { PABPOBREwhLoaderEvaluationPage } from '../pabpobr-ewh-loader-evaluation/pabpobr-ewh-loader-evaluation';
import { PABPOBRProductivityEvaluationPage } from '../pabpobr-productivity-evaluation/pabpobr-productivity-evaluation';
import { TabsMenuPabpObrPage } from '../tabs-menu-pabp-obr/tabs-menu-pabp-obr';

@Component({
  selector: 'page-lag-indicator-obr',
  templateUrl: 'lag-indicator-obr.html'
})
export class LagIndicatorOBRPage {
  
  items: Array<{title: string, component: any}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App) {
<<<<<<< HEAD:SIApps/src/pages/lag-indicator-obr/lag-indicator-obr.ts
  	this.items = [
      { title: 'Production Achievement By Pit', component: PABPOBRProAchievementByPitPage },
=======
    this.items = [
      { title: 'Production Achievement By Pit', component: TabsMenuPabpObrPage },
>>>>>>> origin/SIAPP-Dev-Ervian:SIApps/src/pages/pro-achieve-by-process-obr/pro-achieve-by-process-obr.ts
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
<<<<<<< HEAD:SIApps/src/pages/lag-indicator-obr/lag-indicator-obr.ts
=======


@Component({
 template: `
 <ion-tabs tabsPlacement="bottom">
    <ion-tab [root]="tab1" tabTitle="OB Removal" tabIcon="exca"></ion-tab>
    <ion-tab [root]="tab2" tabTitle="OBR By Site" tabIcon="dumptruck"></ion-tab>
    <ion-tab [root]="tab3" tabTitle="Coal PTR" tabIcon="dumptruck2"></ion-tab>
    <ion-tab [root]="tab4" tabTitle="Coal RTP" tabIcon="longtruck"></ion-tab>
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

>>>>>>> origin/SIAPP-Dev-Ervian:SIApps/src/pages/pro-achieve-by-process-obr/pro-achieve-by-process-obr.ts
