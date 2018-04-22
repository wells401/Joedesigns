import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';




import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import {SauronComponent} from './sauron/sauron.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FoooterComponent } from './foooter/foooter.component';
import { UiComponent } from './content/ui/ui.component';
import { PhytoComponent } from './content/phyto/phyto.component';
import { LoadingComponent } from './content/loading/loading.component';
import { FriendsComponent } from './friends/friends.component';
import { AboutComponent } from './about/about.component';
import { PandaComponent } from './panda/panda.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ResumeComponent } from './resume/resume.component';




@NgModule({

  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    SauronComponent,
    CalendarComponent,
    FoooterComponent,
    UiComponent,
    PhytoComponent,
    LoadingComponent,
    FriendsComponent,
    AboutComponent,
    PandaComponent,
    TopBarComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
   RouterModule.forRoot([
{
    path: 'sauron',
    component: SauronComponent
},
{
  path: 'panda',
  component: PandaComponent
},
{
  path: 'calendar',
  component: CalendarComponent
},
{
  path: 'ui',
  component: UiComponent
},
{
  path: 'phyto',
  component: PhytoComponent
},
{
  path: 'friends',
  component: FriendsComponent
},
{
  path: 'resume',
  component: ResumeComponent
},

   ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
