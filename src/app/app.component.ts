import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header (toggleMobile)="mobileOpen = $event"></app-header>
    <app-mobile-menu [open]="mobileOpen" (close)="mobileOpen=false"></app-mobile-menu>
    <main>
      <section class="container">
        <router-outlet></router-outlet>
      </section>
    </main>
    <app-footer></app-footer>
    <app-back-to-top></app-back-to-top>
  `,
  styles: []
})
export class AppComponent {
  mobileOpen = false;
}
