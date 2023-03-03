import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeTwoComponent } from './components/pages/home-two/home-two.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { TeamComponent } from './components/pages/team/team.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { AboutComponent } from './components/pages/about/about.component';
import { RecordLabelComponent } from './components/pages/record-label/record-label.component';
import { EventsComponent } from './components/pages/events/events.component';
import { LiveShowComponent } from './components/pages/live-show/live-show.component';
import { CalendarComponent } from './components/pages/calendar/calendar.component';

const routes: Routes = [
  {path: '', component: AboutComponent},
    {path: 'home-two', component: HomeTwoComponent},
    {path: 'about', component: AboutComponent},
    {path: 'record-label', component: RecordLabelComponent},
    {path: 'jam-session', component: EventsComponent},
    {path: 'live-show', component: LiveShowComponent},
    {path: 'team', component: TeamComponent},
    {path: 'calendar', component: CalendarComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'error', component: ErrorComponent},
    {path: '**', component: ErrorComponent} // This line will remain down from the whole pages component list
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
