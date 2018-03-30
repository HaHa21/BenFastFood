import { Component, Input } from '@angular/core';
import { AppHeader } from './app-header.model';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent {
   @Input() appheader : AppHeader;
  
}
