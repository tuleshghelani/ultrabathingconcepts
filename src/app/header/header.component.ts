import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isNavbarCollapsed = true;
  isDropdownOpen = false;

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
  

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  toggleDropdown(event: Event) {
    event.preventDefault();
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  closeNavbar() {
    this.isNavbarCollapsed = true;
    this.isDropdownOpen = false;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.innerWidth > 992) {
      this.isNavbarCollapsed = true;
      this.isDropdownOpen = false;
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const dropdownElement = (event.target as HTMLElement).closest('.dropdown');
    if (!dropdownElement) {
      this.isDropdownOpen = false;
    }
  }

  openBrochureViewer() {
    this.router.navigate(['/brochure-viewer']);
  }
}
