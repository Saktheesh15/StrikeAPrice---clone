import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  cards = [
    {title:'Price Monitoring', desc: 'Track competitor prices across marketplaces and feeds', cta:'See more', icon:'💹'},
    {title:'Web Scraping', desc: 'Robust scraping for data feed, product attributes and sellers', cta:'See more', icon:'🕸️'},
    {title:'Attribute Collection', desc: 'Collect attributes to enrich product catalogs', cta:'See more', icon:'🧾'}
  ];
}