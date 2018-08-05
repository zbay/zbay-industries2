import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AnnouncementsComponent } from './components/announcements/announcements.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: AboutComponent},
  { path: 'projects', component: ProjectsComponent },
  { path: 'announcements', component: AnnouncementsComponent },
  // { path: 'visualizations', loadChildren: './modules/visualizations/visualizations.module#VisualizationsModule' },
  { path: '*', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
