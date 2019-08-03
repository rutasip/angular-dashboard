import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  opened:boolean; 
  onToggleSidebar() {
     this.opened = !this.opened;
  }  

}
