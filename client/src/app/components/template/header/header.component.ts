import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private headerService: HeaderService) { 
    
  }

  ngOnInit(): void {
  }

  get title(): string {
    return this.headerService.getHeaderData().title
  }

  get icon(): string {
    return this.headerService.getHeaderData().icon
  }

  get routeUrl(): string {
    return this.headerService.getHeaderData().routeUrl
  }

}
