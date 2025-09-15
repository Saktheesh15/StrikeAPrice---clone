import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Pages
import { HomePageComponent } from './pages/home/home-page.component';
import { ServicesPageComponent } from './pages/services/services-page.component';
import { PriceMonitoringPageComponent } from './pages/services/price-monitoring/price-monitoring-page.component';
import { WebScrapingPageComponent } from './pages/services/web-scraping/web-scraping-page.component';
import { AttributeCollectionPageComponent } from './pages/services/attribute-collection/attribute-collection-page.component';
import { DataFeedPageComponent } from './pages/services/data-feed/data-feed-page.component';
import { AuthPageComponent } from './pages/auth/auth-page.component';
import { PricingPageComponent } from './pages/pricing/pricing-page.component';
import { AboutPageComponent } from './pages/about/about-page.component';
import { ContactPageComponent } from './pages/contact/contact-page.component';
import { BookTrialPageComponent } from './pages/book-trial/book-trial-page.component';

// Components
import { HeaderComponent } from './components/header/header.component';
import { MobileMenuComponent } from './components/mobile_menu/mobile-menu.component';
import { HeroComponent } from './components/hero/hero.component';
import { ServicesComponent } from './components/services/services.component';
import { FooterComponent } from './components/footer/footer.component';
import { BackToTopComponent } from './components/back_to_top/back-to-top.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MobileMenuComponent,
    HeroComponent,
    ServicesComponent,
    FooterComponent,
    BackToTopComponent,
    HomePageComponent,
    ServicesPageComponent,
    PriceMonitoringPageComponent,
    WebScrapingPageComponent,
    AttributeCollectionPageComponent,
    DataFeedPageComponent,
    AuthPageComponent,
    PricingPageComponent,
    AboutPageComponent,
    ContactPageComponent,
    BookTrialPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
