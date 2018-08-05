import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AnnouncementsComponent } from './components/announcements/announcements.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PortfolioItemComponent } from './components/portfolio-item/portfolio-item.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NavbarComponent,
    AnnouncementsComponent,
    PortfolioComponent,
    PortfolioItemComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
