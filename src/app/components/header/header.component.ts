import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() toggleMobile = new EventEmitter<boolean>();
  mobile = false;
  onToggle(){ this.mobile = !this.mobile; this.toggleMobile.emit(this.mobile); }
  closeMobile(){ this.mobile = false; this.toggleMobile.emit(false); }
}