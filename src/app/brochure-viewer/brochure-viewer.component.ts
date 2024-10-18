import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxExtendedPdfViewerComponent } from 'ngx-extended-pdf-viewer';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-brochure-viewer',
  templateUrl: './brochure-viewer.component.html',
  styleUrls: ['./brochure-viewer.component.css']
})
export class BrochureViewerComponent implements OnInit {
  @ViewChild('pdfViewer') pdfViewer!: NgxExtendedPdfViewerComponent;

  isMobile: boolean = false;
  currentPage = 1;
  totalPages = 0;

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

  onDocumentLoad(event: any) {
    this.totalPages = event.numPages;
    console.log('this.totalPages : ', this.totalPages);
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.pdfViewer.page = --this.currentPage;
    }
  }

  nextPage() {
    // if (this.currentPage < this.totalPages) {
      this.pdfViewer.page = ++this.currentPage;
    // }
  }
}
