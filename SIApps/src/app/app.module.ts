import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SuperTabsModule } from 'ionic2-super-tabs';
import { LoginPage } from '../pages/login/login';
import { SideMenuPage } from '../pages/side-menu/side-menu';
import { ManageAccountPage } from '../pages/manage-account/manage-account';
import { TabsMenuPage } from '../pages/tabs-menu/tabs-menu';
import { ProAchieveByProcessTabsPage } from '../pages/pro-achieve-by-process-obr/pro-achieve-by-process-obr';
import { LagLoadingPage } from '../pages/lag-loading/lag-loading';
import { LagIndicatorPage } from '../pages/lag-indicator/lag-indicator';
import { LeadIndicatorPage } from '../pages/lead-indicator/lead-indicator';
import { ProAchieveByProcessOBRPage } from '../pages/pro-achieve-by-process-obr/pro-achieve-by-process-obr';
import { ProAchieveByProcessCPTRPage } from '../pages/pro-achieve-by-process-cptr/pro-achieve-by-process-cptr';
import { ProAchieveByProcessSRPage } from '../pages/pro-achieve-by-process-sr/pro-achieve-by-process-sr';
import { ProAchieveByProcessCRTPPage } from '../pages/pro-achieve-by-process-crtp/pro-achieve-by-process-crtp';
import { ProAchieveByProcessOBRBSPage } from '../pages/pro-achieve-by-process-obrbs/pro-achieve-by-process-obrbs';
import { PABPOBRProAchievementByPitPage } from '../pages/pabpobr-pro-achievement-by-pit/pabpobr-pro-achievement-by-pit';
import { PABPOBRSumOfFleetAchievementPage } from '../pages/pabpobr-sum-of-fleet-achievement/pabpobr-sum-of-fleet-achievement';
import { PABPOBRGapBridgeLPAPage } from '../pages/pabpobr-gap-bridge-lpa/pabpobr-gap-bridge-lpa';
import { PABPOBRNumOfFleetEvaluationPage } from '../pages/pabpobr-num-of-fleet-evaluation/pabpobr-num-of-fleet-evaluation';
import { PABPOBREwhLoaderEvaluationPage } from '../pages/pabpobr-ewh-loader-evaluation/pabpobr-ewh-loader-evaluation';
import { PABPOBRProductivityEvaluationPage } from '../pages/pabpobr-productivity-evaluation/pabpobr-productivity-evaluation';
import { PABPOBRBSSumOfFleetAchievementPage } from '../pages/pabpobrbs-sum-of-fleet-achievement/pabpobrbs-sum-of-fleet-achievement';
import { PABPOBRBSNumOfFleetEvaluationPage } from '../pages/pabpobrbs-num-of-fleet-evaluation/pabpobrbs-num-of-fleet-evaluation';
import { PABPOBRBSEwhLoaderEvaluationPage } from '../pages/pabpobrbs-ewh-loader-evaluation/pabpobrbs-ewh-loader-evaluation';
import { PABPOBRBSFleetProductionAchievementPage } from '../pages/pabpobrbs-fleet-production-achievement/pabpobrbs-fleet-production-achievement';
import { PABPOBRBSProductivityEvaluationPage } from '../pages/pabpobrbs-productivity-evaluation/pabpobrbs-productivity-evaluation';
import { PABPCPTRProAchieveByPitPage } from '../pages/pabpcptr-pro-achieve-by-pit/pabpcptr-pro-achieve-by-pit';
import { PABPCPTRSumOfFleetAchievementPage } from '../pages/pabpcptr-sum-of-fleet-achievement/pabpcptr-sum-of-fleet-achievement';
import { PABPCPTRGapBridgeLPAPage } from '../pages/pabpcptr-gap-bridge-lpa/pabpcptr-gap-bridge-lpa';
import { PABPCPTRNumOfFleetEvaluationPage } from '../pages/pabpcptr-num-of-fleet-evaluation/pabpcptr-num-of-fleet-evaluation';
import { PABPCPTREwhLoaderEvaluationPage } from '../pages/pabpcptr-ewh-loader-evaluation/pabpcptr-ewh-loader-evaluation';
import { PABPCPTRProductivityEvaluationPage } from '../pages/pabpcptr-productivity-evaluation/pabpcptr-productivity-evaluation';
import { POBPCRTPProAchieveByPitPage } from '../pages/pobpcrtp-pro-achieve-by-pit/pobpcrtp-pro-achieve-by-pit';
import { POBPCRTPGapBridgeLPAPage } from '../pages/pobpcrtp-gap-bridge-lpa/pobpcrtp-gap-bridge-lpa';
import { POBPCRTPEwhTrailerByPitPage } from '../pages/pobpcrtp-ewh-trailer-by-pit/pobpcrtp-ewh-trailer-by-pit';
import { POBPCRTPProductivityEvaluationPage } from '../pages/pobpcrtp-productivity-evaluation/pobpcrtp-productivity-evaluation';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage
    SideMenuPage,
    ManageAccountPage,
    TabsMenuPage,
    ProAchieveByProcessTabsPage,
    LagLoadingPage,
    LagIndicatorPage,
    LeadIndicatorPage,
    ProAchieveByProcessOBRPage,
    ProAchieveByProcessCPTRPage,
    ProAchieveByProcessSRPage,
    ProAchieveByProcessCRTPPage,
    ProAchieveByProcessOBRBSPage,
    PABPOBRProAchievementByPitPage,
    PABPOBRSumOfFleetAchievementPage,
    PABPOBRGapBridgeLPAPage,
    PABPOBRNumOfFleetEvaluationPage,
    PABPOBREwhLoaderEvaluationPage,
    PABPOBRProductivityEvaluationPage,
    PABPOBRBSSumOfFleetAchievementPage,
    PABPOBRBSNumOfFleetEvaluationPage,
    PABPOBRBSEwhLoaderEvaluationPage,
    PABPOBRBSFleetProductionAchievementPage,
    PABPOBRBSProductivityEvaluationPage,
    PABPCPTRProAchieveByPitPage,
    PABPCPTRSumOfFleetAchievementPage,
    PABPCPTRGapBridgeLPAPage,
    PABPCPTRNumOfFleetEvaluationPage,
    PABPCPTREwhLoaderEvaluationPage,
    PABPCPTRProductivityEvaluationPage,
    POBPCRTPProAchieveByPitPage,
    POBPCRTPGapBridgeLPAPage,
    POBPCRTPEwhTrailerByPitPage,
    POBPCRTPProductivityEvaluationPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
    SuperTabsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage
    SideMenuPage,
    ManageAccountPage,
    TabsMenuPage,
    ProAchieveByProcessTabsPage,
    LagLoadingPage,
    LagIndicatorPage,
    LeadIndicatorPage,
    ProAchieveByProcessOBRPage,
    ProAchieveByProcessCPTRPage,
    ProAchieveByProcessSRPage,
    ProAchieveByProcessCRTPPage,
    ProAchieveByProcessOBRBSPage,
    PABPOBRProAchievementByPitPage,
    PABPOBRSumOfFleetAchievementPage,
    PABPOBRGapBridgeLPAPage,
    PABPOBRNumOfFleetEvaluationPage,
    PABPOBREwhLoaderEvaluationPage,
    PABPOBRProductivityEvaluationPage,
    PABPOBRBSSumOfFleetAchievementPage,
    PABPOBRBSNumOfFleetEvaluationPage,
    PABPOBRBSEwhLoaderEvaluationPage,
    PABPOBRBSFleetProductionAchievementPage,
    PABPOBRBSProductivityEvaluationPage,
    PABPCPTRProAchieveByPitPage,
    PABPCPTRSumOfFleetAchievementPage,
    PABPCPTRGapBridgeLPAPage,
    PABPCPTRNumOfFleetEvaluationPage,
    PABPCPTREwhLoaderEvaluationPage,
    PABPCPTRProductivityEvaluationPage,
    POBPCRTPProAchieveByPitPage,
    POBPCRTPGapBridgeLPAPage,
    POBPCRTPEwhTrailerByPitPage,
    POBPCRTPProductivityEvaluationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
