import { Component, OnInit, ViewChild, HostListener, ElementRef } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  // @ViewChild('moreDetailsDialog');

  allProductList:any[] = []
  productDetail:any
  selectedProductImage:string | undefined;
  batchSize = 8; // Number of items to load at a time
  currentPage = 1; // Current page
  isLoading = false;
  @ViewChild('scrollContainer', { static: true }) scrollContainer!: ElementRef<any>;

  constructor(
    private productService:ProductService,
  ) { }

  ngOnInit(): void {
    this.getAllProducts();
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
      // Fetch the next batch of products (e.g., using a service)
      const nextProducts = this.getProductsBatch(this.batchSize, this.currentPage);
      if (nextProducts.length > 0) {
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
}