import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  
  isHomeRouteActive(): boolean {
    return this.router.isActive('/', true);
  }

  openPDF(): void {
    // Modify the path based on your file structure
    const pdfPath = '/assets/products/ULTRA BATH CONCEPT BROCHURE DESIGN.- 03-08-23.pdf'; // Path to your PDF file

    // Open the PDF in a new tab
    window.open(pdfPath, '_blank');
  }
}