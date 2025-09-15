import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  template: `<div class="back-to-top" *ngIf="show" (click)="scrollTop()" title="Back to top">↑</div>`,
  styles: [``]
})
export class BackToTopComponent {
  show = false;
  @HostListener('window:scroll', []) onScroll(){ this.show = window.pageYOffset > 300; }
  scrollTop(){ window.scrollTo({top:0,behavior:'smooth'}); }
}