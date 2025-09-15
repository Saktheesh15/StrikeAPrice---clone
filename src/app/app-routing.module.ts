import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/home-page.component';
import { ServicesPageComponent } from './pages/services/services-page.component';
import { PricingPageComponent } from './pages/pricing/pricing-page.component';
import { AboutPageComponent } from './pages/about/about-page.component';
import { ContactPageComponent } from './pages/contact/contact-page.component';
import { BookTrialPageComponent } from './pages/book-trial/book-trial-page.component';
import { AuthPageComponent } from './pages/auth/auth-page.component';
import { PriceMonitoringPageComponent } from './pages/services/price-monitoring/price-monitoring-page.component';
import { WebScrapingPageComponent } from './pages/services/web-scraping/web-scraping-page.component';
import { AttributeCollectionPageComponent } from './pages/services/attribute-collection/attribute-collection-page.component';
import { DataFeedPageComponent } from './pages/services/data-feed/data-feed-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'services', component: ServicesPageComponent },
  { path: 'services/price-monitoring', component: PriceMonitoringPageComponent },
  { path: 'services/web-scraping', component: WebScrapingPageComponent },
  { path: 'services/attribute-collection', component: AttributeCollectionPageComponent },
  { path: 'services/data-feed', component: DataFeedPageComponent },
  { path: 'pricing', component: PricingPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'book-trial', component: BookTrialPageComponent },
  { path: 'auth', component: AuthPageComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}


