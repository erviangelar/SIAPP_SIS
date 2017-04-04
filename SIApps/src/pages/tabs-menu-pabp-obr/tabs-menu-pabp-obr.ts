import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { PabpobrPabpObSlidePage } from '../pabpobr-pabp-ob-slide/pabpobr-pabp-ob-slide';
import { PabpobrPabpPtrSlidePage } from '../pabpobr-pabp-ptr-slide/pabpobr-pabp-ptr-slide';
import { PabpobrPabpRtpSlidePage } from '../pabpobr-pabp-rtp-slide/pabpobr-pabp-rtp-slide';

@Component({
  selector: 'page-tabs-menu-pabp-obr',
  templateUrl: 'tabs-menu-pabp-obr.html'
})
export class TabsMenuPabpObrPage {
 
  tab1: any = PabpobrPabpObSlidePage;
  tab2: any = PabpobrPabpPtrSlidePage;
  tab3: any = PabpobrPabpRtpSlidePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsMenuPabpObrPage');
  }

}
