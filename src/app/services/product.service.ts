import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productList: any[] = []
  constructor() { }

  getAllProducts() {
    this.productList = [
      {
        name:'Paper holder',
        category:'',
        code: '10101',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/10101/paper holder.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Towel rod',
        category:'',
        code: '10101',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/10101/towel rod.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Single soap dish',
        category:'',
        code: '10103',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/10101/single soap dish.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Double soap dish',
        category:'',
        code: '10104',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/10101/double soap dish.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Single tumler',
        category:'',
        code: '10105',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/10101/single tumler.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Liquid dispensor',
        category:'',
        code: '10106',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/10101/liquid dispensor.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Soap with tumler',
        category:'',
        code: '10107',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/10101/soap with tumler.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Soap with liquid',
        category:'',
        code: '10108',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/10101/soap with liquid.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Robe hook',
        category:'',
        code: '10109',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/10101/robe hook.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Soap with liquid',
        category:'',
        code: '10110',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/10101/soap with tumler.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Towel rack',
        category:'',
        code: '40401',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/40401/towel rack.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Towel rod',
        category:'',
        code: '40402',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/40401/towel rod.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Single soap dish',
        category:'',
        code: '40403',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/40401/single soap dish.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Double soap dish',
        category:'',
        code: '40404',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/40401/double soap dish.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Tumler holder',
        category:'',
        code: '40405',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/40401/tumler holder.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'liquid dispencer',
        category:'',
        code: '40406',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/40401/liquid dispencer.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Soap with tumler holder',
        category:'',
        code: '40407',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/40401/soap with tumler holder.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Soap with liquid',
        category:'',
        code: '40408',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/40401/soap with liquid.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Rob hook',
        category:'',
        code: '40409',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/40401/rob hook.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Napkeen ring',
        category:'',
        code: '40409',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/40401/napkeen ring.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Paper holder',
        category:'',
        code: '40409',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/40401/paper holder.jpg',
        description:'',
        allImages:[]
      },
      // {
      //   name:'Product 2',
      //   category:'',
      //   modelNo:'',
      //   price:300,
      //   productImage:'../../assets/products/10101/89a60075-b88d-41a5-a0c8-8e7f01ecf642.jpg',
      //   description:'',
      //   allImages:[
      //     {
      //       id:1,
      //       image:'../../assets/products/10101/89a60075-b88d-41a5-a0c8-8e7f01ecf642.jpg'
      //     },
      //     {
      //       id:2,
      //       image:'../../assets/products/10101/941f63be-f9e4-48b0-8b1c-fd098d435f13.jpg'
      //     },
      //     {
      //       id:3,
      //       image:'../../assets/products/10101/b5cfad08-6680-4164-9123-93237391358f.jpg'
      //     },
      //     {
      //       id:4,
      //       image:'../../assets/products/10101/e54b3c15-d30a-4e1f-aa59-e0788f24030c (1).jpg'
      //     },
      //     {
      //       id:5,
      //       image:'../../assets/products/10101/ee011884-20d3-4901-b5af-0f0888276b33.jpg'
      //     }
      //   ]
      // }
    ];
    return this.productList;
  }
}
