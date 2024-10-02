import { Component, OnInit, AfterViewInit, ElementRef, Renderer2, ViewChild, HostListener } from '@angular/core';
import { ProductService } from '../services/product.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  animations: [
    trigger('productAnimation', [
      state('in', style({ opacity: 1, transform: 'translateY(0)' })),
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(100%)' }),
        animate('2s ease-out'),
      ]),
    ]),
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('ripple', [
      state('active', style({
        transform: 'scale(2)',
        opacity: 0
      })),
      transition('* => active', animate('0.4s ease-out'))
    ])
  ],
})
export class ProductsComponent implements OnInit, AfterViewInit {
  // @ViewChild('moreDetailsDialog');

  rippleState: string = 'inactive';
  rippleX: number = 0;
  rippleY: number = 0;
  allProductList:any[] = []
  productDetail:any
  selectedProductImage:string | undefined;
  batchSize = 8; // Number of items to load at a time
  currentPage = 1; // Current page
  isLoading = false;
  @ViewChild('scrollContainer', { static: true }) scrollContainer!: ElementRef<any>;

  constructor(
    private productService:ProductService,
    private renderer: Renderer2,
    private el: ElementRef
  ) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  ngAfterViewInit() {
    this.initCursorFollower();
  }

  private initCursorFollower() {
    const cursorFollower = this.renderer.createElement('div');
    this.renderer.addClass(cursorFollower, 'cursor-follower');
    this.renderer.appendChild(this.el.nativeElement, cursorFollower);

    this.renderer.listen('document', 'mousemove', (event: MouseEvent) => {
      this.renderer.setStyle(cursorFollower, 'left', `${event.clientX}px`);
      this.renderer.setStyle(cursorFollower, 'top', `${event.clientY}px`);
    });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    if (
      this.scrollContainer.nativeElement.scrollHeight -
        this.scrollContainer.nativeElement.scrollTop <=
      this.scrollContainer.nativeElement.clientHeight
    ) {
      this.loadMoreProducts();
    }
  }

  loadMoreProducts() {
    if (!this.isLoading) {
      this.isLoading = true;
      const nextProducts = this.getProductsBatch(this.batchSize, this.currentPage);
      if (nextProducts.length > 0) {
        // Apply the animation class to newly added products
        nextProducts.forEach((product, index) => {
          product.animationClass = 'product-animation';
        });

        // Concatenate the new products to the list
        this.allProductList = [...this.allProductList, ...nextProducts];
        this.currentPage++;
      }
      this.isLoading = false;
    }
  }

  getProductsBatch(batchSize: number, page: number): any[] {
    const startIndex = (page - 1) * batchSize;
    const endIndex = startIndex + batchSize;
    return this.productService.getAllProducts().slice(startIndex, endIndex);
  }

  getAllProducts(){
    this.allProductList = this.productService.getAllProducts();

  }

  moreProductDetails(product:any){
    this.productDetail = product;
    this.selectedProductImage = this.productDetail.allImages[0].image;
  }

  selectedImage(image:string){
    this.selectedProductImage = image
  }

  onMouseMove(event: MouseEvent, product: any) {
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    this.rippleX = event.clientX - rect.left;
    this.rippleY = event.clientY - rect.top;
    this.rippleState = 'active';
  }

  onAnimationDone() {
    this.rippleState = 'inactive';
  }
}
