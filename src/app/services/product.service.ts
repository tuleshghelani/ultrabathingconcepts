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
        homepage: true,
        price:200,
        productImage:'../../assets/products/10101/paper holder.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Towel rod',
        category:'',
        code: '10101',
        homepage: true,
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
        homepage: true,
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
        homepage: true,
        modelNo:'',
        price:200,
        productImage:'../../assets/products/10101/double_soap_dish.jpg',
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
      {
        name:'Towel rack',
        category:'',
        code: '5001',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/5001/towel rack.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Towel rod',
        category:'',
        code: '5002',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/5001/towel rod.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Single soap dish',
        category:'',
        code: '5003',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/5001/single soap dish.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Double soap dish',
        category:'',
        code: '5004',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/5001/double soap dish.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Single tumler',
        category:'',
        code: '5005',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/5001/double soap dish.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Soap with tumler',
        category:'',
        code: '5007',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/5001/soap with tumler.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Self with soap & tumler',
        category:'',
        code: '5008',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/5001/self with soap & tumler.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Self bath',
        category:'',
        code: '5009',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/5001/self bath.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Napkeen stand',
        category:'',
        code: '5010',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/5001/napkeen stand.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Paper holder',
        category:'',
        code: '5011',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/5001/paper holder.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Towel rack',
        category:'',
        code: '6001',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/6001/towel rack.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Towel rod',
        category:'',
        code: '6002',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/6001/towel rod.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Double soap dish',
        category:'',
        code: '6003',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/6001/double soap dish.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Soap with tumler',
        category:'',
        code: '6004',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/6001/soap with tumler.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Single tumler',
        category:'',
        code: '6005',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/6001/single tumler.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Liquid dispensor',
        category:'',
        code: '6006',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/6001/liquid dispensor.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Rob hook',
        category:'',
        code: '6007',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/6001/rob hook.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Towel rack',
        category:'',
        code: '2001',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/2001/towel rack.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Towel rod',
        category:'',
        code: '2002',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/2001/towel rod.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Single soap dish',
        category:'',
        code: '2003',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/2001/single soap dish.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Double soap dish',
        category:'',
        code: '2004',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/2001/double soap dish.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Single tumler',
        category:'',
        code: '2005',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/2001/single tumler.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Liquid dispensor',
        category:'',
        code: '2006',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/2001/liquid dispensor.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Soap with tumler',
        category:'',
        code: '2007',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/2001/soap with tumler.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Bath self',
        category:'',
        code: '2008',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/2001/bath self.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Robe hook',
        category:'',
        code: '2009',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/2001/robe hook.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Squre napkeen stand',
        category:'',
        code: '2010',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/2001/squre napkeen stand.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Paper holder',
        category:'',
        code: '2011',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/2001/paper holder.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Towel rack',
        category:'',
        code: '3001',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/3001/towel rack.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Towel rod',
        category:'',
        code: '3002',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/3001/towel rod.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Single soap dish',
        category:'',
        code: '3003',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/3001/single soap dish.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Double soap dish',
        category:'',
        code: '3004',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/3001/double soap dish.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Single tumler',
        category:'',
        code: '3005',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/3001/single tumler.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Liquid dispensor',
        category:'',
        code: '3006',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/3001/liquid dispensor.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Soap with tumler',
        category:'',
        code: '3007',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/3001/soap with tumler.jpg',
        description:'',
        allImages:[]
      },
      // {
      //   name:'Robe hook',
      //   category:'',
      //   code: '3009',
      //   modelNo:'',
      //   price:200,
      //   productImage:'../../assets/products/S.S - 202/3001/robe hook.jpg',
      //   description:'',
      //   allImages:[]
      // },
      {
        name:'Square napkeen stand',
        category:'',
        code: '3010',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/3001/square napkeen stand.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Paper holder',
        category:'',
        code: '3011',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/3001/paper holder.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Towel rack',
        category:'',
        code: '4001',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/4001/towel rack.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Towel rod',
        category:'',
        code: '4002',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/4001/towel rod.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Single soap dish',
        category:'',
        code: '4003',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/4001/single soap dish.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Double soap dish',
        category:'',
        code: '4004',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/4001/double soap dish.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Single tumler',
        category:'',
        code: '4005',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/4001/single tumler.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Liquid dispensor',
        category:'',
        code: '4006',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/4001/liquid dispensor.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Soap with tumler',
        category:'',
        code: '4007',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/4001/soap with tumler.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Bath self with soap and tumler',
        category:'',
        code: '4008',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/4001/bath self with soap and tumler.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Robe hook',
        category:'',
        code: '4009',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/4001/robe hook.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Napkeen stand',
        category:'',
        code: '4010',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/4001/napkeen stand.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Paper holder',
        category:'',
        code: '4011',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/4001/paper holder.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Bath self',
        category:'',
        code: '4012',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/4001/bath self.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Liquid dispencer',
        category:'',
        code: '1001',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/1001/liquid dispencer.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Bath self',
        category:'',
        code: '1002',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/1001/bath self.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Paper holder',
        category:'',
        code: '1003',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/1001/paper holder.jpg',
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
