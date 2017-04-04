import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';

import { LeadIndicatorProductionDefinitionPage } from '../lead-indicator-production-definition/lead-indicator-production-definition';
import { LeadIndicatorHRForExecutivePage } from '../lead-indicator-hr-for-executive/lead-indicator-hr-for-executive';
import { LeadIndicatorHRForExecutiveByJobsitePage } from '../lead-indicator-hr-for-executive-by-jobsite/lead-indicator-hr-for-executive-by-jobsite';
import { LeadIndicatorHRForExecutiveByPitPage } from '../lead-indicator-hr-for-executive-by-pit/lead-indicator-hr-for-executive-by-pit';
import { LeadIndicatorHRForSupervisorPage } from '../lead-indicator-hr-for-supervisor/lead-indicator-hr-for-supervisor';

@Component({
  selector: 'page-lead-indicator',
  templateUrl: 'lead-indicator.html'
})
export class LeadIndicatorPage {
  
  items: Array<{title: string, component: any}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App) {
  	this.items = [
      { title: 'Production Definition', component: LeadIndicatorProductionDefinitionPage },
      { title: 'Hourly Report for Executive', component: LeadIndicatorHRForExecutivePage },
      { title: 'Hourly Report for Executive by Jobsite', component: LeadIndicatorHRForExecutiveByJobsitePage },
      { title: 'Hourly Report for Executive by Pit', component: LeadIndicatorHRForExecutiveByPitPage },
      { title: 'Hourly Report for Supervisor', component: LeadIndicatorHRForSupervisorPage }
    ];
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad LeadIndicatorPage');
  }

  itemSelected(item) {
    // this.navCtrl.push(item.component);
    this.app.getRootNav().push(item.component);
  }

}


