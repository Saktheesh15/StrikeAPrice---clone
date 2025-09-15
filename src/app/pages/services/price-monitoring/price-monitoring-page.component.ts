import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-price-monitoring-page',
  templateUrl: './price-monitoring-page.component.html',
  styleUrls: ['./price-monitoring-page.component.scss']
})
export class PriceMonitoringPageComponent {
  @ViewChild('googleSection') googleSection?: ElementRef<HTMLElement>;
  @ViewChild('amazonSection') amazonSection?: ElementRef<HTMLElement>;
  @ViewChild('competitorSection') competitorSection?: ElementRef<HTMLElement>;

  activeTab: 'google' | 'amazon' | 'competitor' = 'google';

  go(tab: 'google' | 'amazon' | 'competitor'){
    this.activeTab = tab;
    const target = tab === 'google' ? this.googleSection?.nativeElement
      : tab === 'amazon' ? this.amazonSection?.nativeElement
      : this.competitorSection?.nativeElement;
    if(target){ target.scrollIntoView({behavior:'smooth', block:'start'}); }
  }
}


