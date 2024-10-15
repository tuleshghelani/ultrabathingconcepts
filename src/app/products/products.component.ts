import { Component, OnInit, AfterViewInit, ElementRef, Renderer2, ViewChild, HostListener, NgZone, OnDestroy } from '@angular/core';
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
export class ProductsComponent implements OnInit, AfterViewInit, OnDestroy {
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
  @ViewChild('interactiveBackground') interactiveBackground!: ElementRef;

  private ctx!: CanvasRenderingContext2D;
  private particles: Particle[] = [];
  private animationFrame: number | null = null;

  constructor(
    private productService:ProductService,
    private renderer: Renderer2,
    private el: ElementRef,
    private ngZone: NgZone
  ) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  ngAfterViewInit() {
    this.initCursorFollower();
    this.initInteractiveBackground();
  }

  ngOnDestroy(): void {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }
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

  private initInteractiveBackground(): void {
    const canvas = this.interactiveBackground.nativeElement;
    this.ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    this.ngZone.runOutsideAngular(() => {
      canvas.addEventListener('mousemove', this.onMouseMove.bind(this));
      this.animate();
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

  onAnimationDone() {
    this.rippleState = 'inactive';
  }

  onMouseMove(event: MouseEvent, product: any): void {
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    this.rippleX = event.clientX - rect.left;
    this.rippleY = event.clientY - rect.top;
    this.rippleState = 'active';
    const x = event.clientX;
    const y = event.clientY;
    for (let i = 0; i < 3; i++) {
      this.particles.push(new Particle(x, y, this.ctx));
    }
  }

  private animate(): void {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

    this.particles.forEach((particle, index) => {
      if (particle.alpha <= 0) {
        this.particles.splice(index, 1);
      } else {
        particle.update();
      }
    });

    this.animationFrame = requestAnimationFrame(() => this.animate());
  }
}

class Particle {
  private x: number;
  private y: number;
  private vx: number;
  private vy: number;
  private color: string;
  public alpha: number;
  private ctx: CanvasRenderingContext2D;

  constructor(x: number, y: number, ctx: CanvasRenderingContext2D) {
    this.x = x;
    this.y = y;
    this.vx = Math.random() * 2 - 1;
    this.vy = Math.random() * 2 - 1;
    this.color = `hsl(${Math.random() * 360}, 50%, 50%)`;
    this.alpha = 1;
    this.ctx = ctx;
  }

  update(): void {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 0.01;

    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
    this.ctx.fillStyle = this.color;
    this.ctx.globalAlpha = this.alpha;
    this.ctx.fill();
  }
}
