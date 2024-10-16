import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxExtendedPdfViewerComponent } from 'ngx-extended-pdf-viewer';
import { debounceTime } from 'rxjs/operators';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-brochure-viewer',
  templateUrl: './brochure-viewer.component.html',
  styleUrls: ['./brochure-viewer.component.css']
})
export class BrochureViewerComponent implements OnInit {
  @ViewChild('pdfViewer', { static: false }) pdfViewer!: NgxExtendedPdfViewerComponent;

  isMobile: boolean = false;
  currentPage: number = 1;
  totalPages: number = 0;

  ngOnInit() {
    this.checkMobile();
    fromEvent(window, 'resize')
      .pipe(debounceTime(200))
      .subscribe(() => this.checkMobile());
  }

  checkMobile() {
    this.isMobile = window.innerWidth <= 768;
  }

  onPageChange(page: number) {
    console.log('Page changed to:', page);
    this.currentPage = page; // Update the current page state when a page changes
  }

  onDocumentLoad(event: any) {
    console.log('PDF loaded with', event.pagesCount, 'pages');
    this.totalPages = event.pagesCount;
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--; // Update current page
      this.pdfViewer.page = this.currentPage; // Sync with the PDF viewer
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++; // Update current page
      this.pdfViewer.page = this.currentPage; // Sync with the PDF viewer
    }
  }
  // Implement onClick and onTouchStart methods as needed
}
