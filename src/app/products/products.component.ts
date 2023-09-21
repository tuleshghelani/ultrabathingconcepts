import { Component, OnInit, ViewChild } from '@angular/core';
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
  selectedProductImage:string | undefined
  constructor(
    private productService:ProductService,
  ) { }

  ngOnInit(): void {
    this.getAllProducts();
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