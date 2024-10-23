import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgxExtendedPdfViewerComponent, PDFDocumentProxy } from 'ngx-extended-pdf-viewer';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-brochure-viewer',
  templateUrl: './brochure-viewer.component.html',
  styleUrls: ['./brochure-viewer.component.css']
})
export class BrochureViewerComponent implements OnInit, AfterViewInit {
  @ViewChild(NgxExtendedPdfViewerComponent)
  pdfComponent!: NgxExtendedPdfViewerComponent;
  @ViewChild('pdfViewer') pdfViewer!: NgxExtendedPdfViewerComponent;


  isMobile: boolean = false;
  currentPage = 1;
  totalPages = 0;
  pdfLoaded = false;

  onPageChange(page: number) {
    this.currentPage = page;
  }

  checkMobile() {
    this.isMobile = window.innerWidth <= 768;
  }

  ngOnInit() {
    this.checkMobile();
    fromEvent(window, 'resize')
      .pipe(debounceTime(200))
      .subscribe(() => this.checkMobile());
  }

  ngAfterViewInit() {
    this.pdfComponent.src = 'assets/products/ULTRA_BATH_CONCEPT_BROCHURE_DESIGN.pdf';
    this.pdfComponent.pdfLoaded.subscribe(() => {
      this.pdfLoaded = true;
    });
  }

  onPdfLoadComplete(pdf: PDFDocumentProxy): void {
    // Handle PDF load complete
    this.totalPages = pdf.numPages;
  }

  onPdfLoaded(event: any): void {
    // Handle PDF loaded
    this.pdfLoaded = true;
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.pdfViewer.page = --this.currentPage;
    }
  }

  nextPage() {
    // if (this.currentPage < this.totalPages) {
      // this.pdfViewer.page = ++this.currentPage;
    // }
    console.log('this.totalPages : ', this.totalPages);

    this.pdfViewer.page = ++this.currentPage;
    this.pdfViewer.page = ++this.currentPage;
  }
}
