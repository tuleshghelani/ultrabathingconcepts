import { Component, HostListener, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private productService:ProductService,
  ) { }
  showButton = true;  
  allProductList:any[] = []
  
  ngOnInit(): void {
    this.getAllProducts();
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

}
