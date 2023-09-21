import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  showButton = true;
  
  ngOnInit(): void {
  }
  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.documentElement.scrollTop || document.body.scrollTop > 100) {
      this.showButton = true;
    } else {
      this.showButton = false;
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
