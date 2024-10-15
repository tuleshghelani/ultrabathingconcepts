import { Component, ElementRef, HostListener, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  constructor(
    private productService:ProductService,
  ) { }
  showButton = true;
  allProductList:any[] = []
  @ViewChild('sliderTrack') sliderTrack: ElementRef | undefined;
  currentIndex = 0;
  itemsPerSlide = 4;
  hoveredIndex: number | null = null;
  private startX: number = 0;
  private currentTranslate: number = 0;
  private isDragging: boolean = false;

  ngOnInit(): void {
    this.getAllProducts();
  }

  ngAfterViewInit() {
    this.updateSliderPosition();
  }

  getAllProducts(){
    this.allProductList = this.productService.getAllProducts().filter(product => product.homepage === true);;
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


  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateSliderView();
    }
  }

  nextSlide() {
    if (this.currentIndex < this.allProductList.length - this.itemsPerSlide) {
      this.currentIndex++;
      this.updateSliderView();
    }
  }

  updateSliderView() {
    if (this.sliderTrack) {
      const translateX = -this.currentIndex * (100 / this.itemsPerSlide);
      this.sliderTrack.nativeElement.style.transform = `translateX(${translateX}%)`;
    }
  }

  adjustItemsPerSlide() {
    const width = window.innerWidth;
    if (width >= 1200) {
      this.itemsPerSlide = 4;
    } else if (width >= 992) {
      this.itemsPerSlide = 3;
    } else if (width >= 576) {
      this.itemsPerSlide = 2;
    } else {
      this.itemsPerSlide = 1;
    }
    this.updateSliderView();
  }

  @HostListener('window:resize')
  onResize() {
    this.adjustItemsPerSlide();
  }

  onProductHover(index: number) {
    this.hoveredIndex = index;
  }

  onProductLeave(index: number) {
    this.hoveredIndex = null;
  }

  moreProductDetails(product: any) {
    // Implement your logic to show product details
    console.log('Show details for:', product);
  }

  private updateSliderPosition() {
    const maxTranslate = -(this.allProductList.length - 1) * 100;
    this.currentTranslate = Math.max(Math.min(this.currentTranslate, 0), maxTranslate);
    if (this.sliderTrack) {
      this.sliderTrack.nativeElement.style.transform = `translateX(${this.currentTranslate}%)`;
    }
  }

  onTouchStart(event: TouchEvent) {
    this.startX = event.touches[0].clientX;
    this.isDragging = true;
  }

  onTouchMove(event: TouchEvent) {
    if (!this.isDragging) return;
    const currentX = event.touches[0].clientX;
    const diff = this.startX - currentX;
    const sensitivity = 0.5; // Adjust this value to change swipe sensitivity
    this.currentTranslate -= diff * sensitivity;
    this.updateSliderPosition();
    this.startX = currentX;
  }

  onTouchEnd() {
    this.isDragging = false;
    // Snap to the nearest slide
    const slideWidth = 100;
    const nearestSlide = Math.round(Math.abs(this.currentTranslate) / slideWidth);
    this.currentTranslate = -nearestSlide * slideWidth;
    this.updateSliderPosition();
  }

}
