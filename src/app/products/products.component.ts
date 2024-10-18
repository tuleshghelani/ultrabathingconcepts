import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import { ProductService } from '../services/product.service';
import { trigger, state, style, animate, transition, query, stagger } from '@angular/animations';
declare var bootstrap: any; // Add this line at the top of your file

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  animations: [
    trigger('cardAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.8)' }),
        animate('{{delay}}ms cubic-bezier(0.4, 0.0, 0.2, 1)',
          style({ opacity: 1, transform: 'scale(1)' })
        )
      ])
    ]),
    trigger('imageAnimation', [
      state('normal', style({
        transform: 'scale(1)'
      })),
      state('hovered', style({
        transform: 'scale(1.1)'
      })),
      transition('normal <=> hovered', animate('300ms ease-in-out'))
    ]),
    trigger('overlayAnimation', [
      state('normal', style({
        opacity: 0
      })),
      state('hovered', style({
        opacity: 1
      })),
      transition('normal <=> hovered', animate('200ms ease-in-out'))
    ]),
    trigger('infoAnimation', [
      state('normal', style({
        transform: 'translateY(0)'
      })),
      state('hovered', style({
        transform: 'translateY(-10px)'
      })),
      transition('normal <=> hovered', animate('200ms ease-in-out'))
    ]),
    trigger('productAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateX(-50px)' }),
          stagger('200ms', [
            animate('350ms cubic-bezier(0.35, 0, 0.25, 1)',
              style({ opacity: 1, transform: 'translateX(0)' })
            )
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class ProductsComponent implements OnInit, AfterViewInit {
  allProductList: any[] = [];
  filteredProducts: any[] = [];
  displayedProducts: any[] = [];
  categories: string[] = [];
  selectedCategory: string = 'All';
  searchTerm: string = '';
  productDetail: any;
  @ViewChild('productGrid') productGrid!: ElementRef;
  batchSize = 8; // Number of items to load initially
  additionalBatchSize = 4; // Number of items to load on each scroll
  isLoading = false;
  visibleCategories: string[] = [];
  categoryStartIndex: number = 0;
  visibleCategoryCount: number = 4;
  hasMoreCategories: boolean = false;
  @ViewChild('categoryButtonsContainer') categoryButtonsContainer!: ElementRef;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getAllProducts();
    this.getCategories();
    this.setVisibleCategoryCount();
    this.updateVisibleCategories();
  }

  ngAfterViewInit() {
    this.initMasonry();
    this.updateVisibleCategories();
  }

  getAllProducts() {
    this.allProductList = this.productService.getAllProducts();
    this.filterProducts();
  }

  getCategories() {
    this.categories = ['All', ...new Set(this.allProductList.map(product => product.category))];
    this.updateVisibleCategories();
  }

  filterProducts() {
    this.filteredProducts = this.allProductList.filter(product =>
      (this.selectedCategory === 'All' || product.category === this.selectedCategory) &&
      (product.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
       product.code.toLowerCase().includes(this.searchTerm.toLowerCase()))
    );
    this.displayedProducts = this.filteredProducts.slice(0, this.batchSize);
    this.initMasonry();
  }

  showDetails(product: any) {
    this.productDetail = product;
    const modal = new bootstrap.Modal(document.getElementById('moreDetailsDialog'));
    modal.show();
  }

  onCategoryChange(category: string) {
    this.selectedCategory = category;
    this.filterProducts();
  }

  onSearch(event: Event) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.filterProducts();
  }

  initMasonry() {
    // Implementation of masonry layout
    // This would typically use a library like Masonry.js
    // For simplicity, we'll just add a class to trigger a CSS grid layout
    setTimeout(() => {
      if (this.productGrid) {
        this.productGrid.nativeElement.classList.add('masonry-grid');
      }
    });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 500 && !this.isLoading) {
      this.loadMoreProducts();
    }
  }

  loadMoreProducts() {
    if (this.displayedProducts.length < this.filteredProducts.length) {
      this.isLoading = true;
      const nextBatch = this.filteredProducts.slice(
        this.displayedProducts.length,
        this.displayedProducts.length + this.additionalBatchSize
      );
      setTimeout(() => {
        this.displayedProducts = [...this.displayedProducts, ...nextBatch];
        this.isLoading = false;
        this.initMasonry();
      }, 500);
    }
  }

  updateVisibleCategories() {
    this.visibleCategories = this.categories.slice(this.categoryStartIndex, this.categoryStartIndex + this.visibleCategoryCount);
    this.hasMoreCategories = this.categoryStartIndex + this.visibleCategoryCount < this.categories.length;
    if (this.hasMoreCategories && this.visibleCategories.length === this.visibleCategoryCount) {
      this.visibleCategories[this.visibleCategoryCount - 1] = '...';
    }
  }

  shiftCategories(direction: number) {
    const newStartIndex = this.categoryStartIndex + direction * this.visibleCategoryCount;
    if (newStartIndex >= 0 && newStartIndex < this.categories.length) {
      this.categoryStartIndex = newStartIndex;
      this.updateVisibleCategories();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.setVisibleCategoryCount();
    this.updateVisibleCategories();
  }

  // setVisibleCategoryCount() {
  //   const containerWidth = this.categoryButtonsContainer?.nativeElement.offsetWidth || window.innerWidth;
  //   const buttonWidth = 120; // Approximate width of a category button
  //   this.visibleCategoryCount = Math.floor(containerWidth / buttonWidth);
  //   this.visibleCategoryCount = Math.max(1, Math.min(this.visibleCategoryCount, this.categories.length));
  // }

  setVisibleCategoryCount() {
    const width = window.innerWidth;
    if (width >= 1200) {
      this.visibleCategoryCount = 6;
    } else if (width >= 992) {
      this.visibleCategoryCount = 5;
    } else if (width >= 768) {
      this.visibleCategoryCount = 4;
    } else {
      // For mobile, we'll show all categories but make them scrollable
      this.visibleCategoryCount = this.categories.length;
    }
  }
}
