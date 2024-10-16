import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { NgxExtendedPdfViewerComponent } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-brochure-viewer',
  templateUrl: './brochure-viewer.component.html',
  styleUrls: ['./brochure-viewer.component.css']
})
export class BrochureViewerComponent implements OnInit {
  @ViewChild(NgxExtendedPdfViewerComponent) pdfViewer!: NgxExtendedPdfViewerComponent;

  isMobile: boolean = false;
  pageViewMode: 'single' | 'book' = 'book';
  spread: 'off' | 'even' | 'odd' = 'even';
  currentPage: number = 1;
  totalPages: number = 0;

  ngOnInit() {
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkScreenSize();
  }

  private checkScreenSize() {
    this.isMobile = window.innerWidth < 768; // Adjust this breakpoint as needed
    this.pageViewMode = this.isMobile ? 'single' : 'book';
    this.spread = this.isMobile ? 'off' : 'even';
  }

  onPageChange(pageNumber: number) {
    this.currentPage = pageNumber;
  }

  onDocumentLoad(event: any) {
    this.totalPages = event.pagesCount;
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.pdfViewer.page = this.currentPage + 1;
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.pdfViewer.page = this.currentPage - 1;
    }
  }

  onTouchStart(event: TouchEvent) {
    if (this.isMobile && event.currentTarget) {
      const touchX = event.touches[0].clientX;
      const viewerWidth = (event.currentTarget as HTMLElement).clientWidth;
      if (touchX < viewerWidth / 2) {
        this.previousPage();
      } else {
        this.nextPage();
      }
    }
  }

  onClick(event: MouseEvent) {
    if (this.isMobile && event.currentTarget) {
      const clickX = event.clientX;
      const viewerWidth = (event.currentTarget as HTMLElement).clientWidth;
      if (clickX < viewerWidth / 2) {
        this.previousPage();
      } else {
        this.nextPage();
      }
    }
  }
}
