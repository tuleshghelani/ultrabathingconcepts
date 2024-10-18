import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productList: any[] = []
  categoryWiseproductList: any[] = []
  constructor() { }


  getCategoryWiseProducts() {
    this.categoryWiseproductList = [
    {
      name:'Paper holder',
      category:'',
      code: '10111',
      modelNo:'',
      homepage: true,
      price:200,
      productImage:'../../assets/products/10101/paper holder.jpg',
      description:'',
      allImages:[
        {
          id:101,
          image:'../../assets/products/10101/paper holder.jpg',
          code: '10111',
        },
        {
          id:102,
          image:'../../assets/products/40401/paper holder.jpg',
          code: '40409',
        },
        {
          id:103,
          image:'../../assets/products/S.S - 202/5001/paper holder.jpg',
          code: '5011',
        },
        {
          id:104,
          image:'../../assets/products/S.S - 202/2001/paper holder.jpg',
          code: '2011',
        },
        {
          id:105,
          image:'../../assets/products/S.S - 202/3001/paper holder.jpg',
          code: '3011',
        },
        {
          id:106,
          image:'../../assets/products/S.S - 202/4001/paper holder.jpg',
          code: '4011',
        },
        {
          id:107,
          image:'../../assets/products/S.S - 202/1001/paper holder.jpg',
          code: '1003',
        }
      ]
    },
    {
      name:'Towel rod',
      category:'Towel rod',
      code: '10101',
      modelNo:'',
      homepage: true,
      price:200,
      productImage:'../../assets/products/10101/towel rod.jpg',
      description:'',
      allImages:[
        {
          id:201,
          image:'../../assets/products/10101/towel rod.jpg',
          code: '10101',
        },
        {
          id:202,
          image:'../../assets/products/40401/towel rod.jpg',
          code: '40402',
        },
        {
          id:203,
          image:'../../assets/products/S.S - 202/5001/towel rod.jpg',
          code: '5002',
        },
        {
          id:204,
          image:'../../assets/products/S.S - 202/6001/towel rod.jpg',
          code: '6002',
        },
        {
          id:205,
          image:'../../assets/products/S.S - 202/2001/towel rod.jpg',
          code: '2002',
        },
        {
          id:206,
          image:'../../assets/products/S.S - 202/3001/towel rod.jpg',
          code: '3002',
        },
        {
          id:107,
          image:'../../assets/products/S.S - 202/4001/towel rod.jpg',
          code: '4002',
        }
      ]
    },
    {
      name:'Single soap dish',
      category:'',
      code: '10103',
      modelNo:'',
      homepage: true,
      price:200,
      productImage:'../../assets/products/10101/single soap dish.jpg',
      description:'',
      allImages:[
        {
          id:301,
          image:'../../assets/products/10101/single soap dish.jpg',
          code: '10103',
        },
        {
          id:302,
          image:'../../assets/products/40401/single soap dish.jpg',
          code: '40403',
        },
        {
          id:303,
          image:'../../assets/products/S.S - 202/5001/single soap dish.jpg',
          code: '5003',
        },
        {
          id:304,
          image:'../../assets/products/S.S - 202/2001/single soap dish.jpg',
          code: '2003',
        },
        {
          id:305,
          image:'../../assets/products/S.S - 202/3001/single soap dish.jpg',
          code: '3003',
        },
        {
          id:306,
          image:'../../assets/products/S.S - 202/4001/single soap dish.jpg',
          code: '4003',
        }
      ]
    },
    {
      name:'Double soap dish',
      category:'',
      code: '10104',
      modelNo:'',
      homepage: true,
      price:200,
      productImage:'../../assets/products/10101/double_soap_dish.jpg',
      description:'',
      allImages:[
        {
          id:401,
          image:'../../assets/products/10101/double_soap_dish.jpg',
          code: '10103',
        },
        {
          id:402,
          image:'../../assets/products/40401/double soap dish.jpg',
          code: '40404',
        },
        {
          id:403,
          image:'../../assets/products/S.S - 202/5001/double soap dish.jpg',
          code: '5004',
        },
        {
          id:404,
          image:'../../assets/products/S.S - 202/6001/double soap dish.jpg',
          code: '6003',
        },
        {
          id:405,
          image:'../../assets/products/S.S - 202/2001/double soap dish.jpg',
          code: '2004',
        },
        {
          id:406,
          image:'../../assets/products/S.S - 202/3001/double soap dish.jpg',
          code: '3004',
        },
        {
          id:407,
          image:'../../assets/products/S.S - 202/4001/double soap dish.jpg',
          code: '4004',
        }
      ]
    },
    {
      name:'Single tumler',
      category:'',
      code: '10105',
      modelNo:'',
      homepage: true,
      price:200,
      productImage:'../../assets/products/10101/single tumler.jpg',
      description:'',
      allImages:[
        {
          id:501,
          image:'../../assets/products/10101/single tumler.jpg',
          code: '10105',
        },
        {
          id:502,
          image:'../../assets/products/S.S - 202/5001/single tumler.jpg',
          code: '5005',
        },
        {
          id:504,
          image:'../../assets/products/S.S - 202/2001/single tumler.jpg',
          code: '2005',
        },
        {
          id:505,
          image:'../../assets/products/S.S - 202/3001/single tumler.jpg',
          code: '3005',
        },
        {
          id:506,
          image:'../../assets/products/S.S - 202/4001/single tumler.jpg',
          code: '4005',
        }
      ]
    },
    {
      name:'Liquid dispensor',
      category:'',
      code: '10106',
      modelNo:'',
      homepage: true,
      price:200,
      productImage:'../../assets/products/10101/liquid dispensor.jpg',
      description:'',
      allImages:[
        {
          id:601,
          image:'../../assets/products/10101/liquid dispensor.jpg',
          code: '10106',
        },
        {
          id:602,
          image:'../../assets/products/S.S - 202/6001/liquid dispensor.jpg',
          code: '6006',
        },
        {
          id:603,
          image:'../../assets/products/S.S - 202/2001/liquid dispensor.jpg',
          code: '2006',
        },
        {
          id:604,
          image:'../../assets/products/S.S - 202/3001/liquid dispensor.jpg',
          code: '3006',
        },
        {
          id:605,
          image:'../../assets/products/S.S - 202/4001/liquid dispensor.jpg',
          code: '4006',
        }
      ]
    },
    {
      name:'Soap with tumler',
      category:'',
      code: '10107',
      modelNo:'',
      homepage: true,
      price:200,
      productImage:'../../assets/products/10101/soap with tumler.jpg',
      description:'',
      allImages:[
        {
          id:601,
          image:'../../assets/products/10101/soap with tumler.jpg',
          code: '10107',
        },
        {
          id:602,
          image:'../../assets/products/40401/soap with tumler holder.jpg',
          code: '40407',
        },
        {
          id:603,
          image:'../../assets/products/S.S - 202/5001/soap with tumler.jpg',
          code: '5007',
        },
        {
          id:604,
          image:'../../assets/products/S.S - 202/6001/soap with tumler.jpg',
          code: '6004',
        },
        {
          id:2007,
          image:'../../assets/products/S.S - 202/2001/soap with tumler.jpg',
          code: '4006',
        },
        {
          id:604,
          image:'../../assets/products/S.S - 202/3001/soap with tumler.jpg',
          code: '3007',
        },
        {
          id:2007,
          image:'../../assets/products/S.S - 202/4001/soap with tumler.jpg',
          code: '4007',
        }
      ]
    },
    {
      name:'Bath self with soap and tumler',
      category:'',
      code: '4008',
      modelNo:'',
      homepage: true,
      price:200,
      productImage:'../../assets/products/S.S - 202/4001/bath self with soap and tumler.jpg',
      description:'',
      allImages:[
        {
          id:601,
          image:'../../assets/products/S.S - 202/4001/bath self with soap and tumler.jpg',
          code: '4008',
        }
      ]
    },
    {
      name:'Soap with liquid',
      category:'',
      code: '10108',
      modelNo:'',
      homepage: true,
      price:200,
      productImage:'../../assets/products/10101/soap with liquid.jpg',
      description:'',
      allImages:[
        {
          id:601,
          image:'../../assets/products/10101/soap with liquid.jpg',
          code: '10108',
        },
        {
          id:602,
          image:'../../assets/products/40401/soap with liquid.jpg',
          code: '40408',
        }
      ]
    },
    {
      name:'Robe hook',
      category:'',
      code: '10109',
      modelNo:'',
      homepage: true,
      price:200,
      productImage:'../../assets/products/10101/robe hook.jpg',
      description:'',
      allImages:[
        {
          id:601,
          image:'../../assets/products/10101/robe hook.jpg',
          code: '10109',
        },
        {
          id:602,
          image:'../../assets/products/S.S - 202/2001/robe hook.jpg',
          code: '2009',
        },
        {
          id:602,
          image:'../../assets/products/S.S - 202/2001/robe hook.jpg',
          code: '4009',
        }
      ]
    },
    {
      name:'Towel rack',
      category:'Towel rack',
      code: '40401',
      modelNo:'',
      homepage: true,
      price:200,
      productImage:'../../assets/products/40401/towel rack.jpg',
      description:'',
      allImages:[
        {
          id:601,
          image:'../../assets/products/40401/towel rack.jpg',
          code: '40401',
        },
        {
          id:602,
          image:'../../assets/products/S.S - 202/5001/towel rack.jpg',
          code: '5001',
        },
        {
          id:602,
          image:'../../assets/products/S.S - 202/6001/towel rack.jpg',
          code: '6001',
        },
        {
          id:602,
          image:'../../assets/products/S.S - 202/2001/towel rack.jpg',
          code: '2001',
        },
        {
          id:602,
          image:'../../assets/products/S.S - 202/3001/towel rack.jpg',
          code: '3001',
        },
        {
          id:602,
          image:'../../assets/products/S.S - 202/4001/towel rack.jpg',
          code: '4001',
        }
      ]
    },


  ];
    return this.categoryWiseproductList;
  }

  getDashboardProducts(){
    this.productList = this.productList.filter(product => product.homepage === true);
    return this.productList;
  }

  getAllProducts() {
    this.productList = [
      {
        name:'Towel rack',
        category:'Towel rack',
        code: '10101',
        modelNo:'',
        homepage: true,
        price:200,
        productImage:'../../assets/products/10101/towel rack.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Towel rod',
        category:'Towel rod',
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
        category:'Single soap dish',
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
        category:'Double soap dish',
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
        category:'Single tumler',
        code: '10105',
        modelNo:'',
        homepage: true,
        price:200,
        productImage:'../../assets/products/10101/single tumler.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Liquid dispensor',
        category:'Liquid dispensor',
        code: '10106',
        homepage: true,
        modelNo:'',
        price:200,
        productImage:'../../assets/products/10101/liquid dispensor.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Soap with tumler',
        category:'Soap with tumler',
        code: '10107',
        homepage: true,
        modelNo:'',
        price:200,
        productImage:'../../assets/products/10101/soap with tumler.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Soap with liquid',
        category:'Soap with liquid',
        code: '10108',
        homepage: true,
        modelNo:'',
        price:200,
        productImage:'../../assets/products/10101/soap with liquid.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Robe hook',
        category:'Robe hook',
        code: '10109',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/10101/robe hook.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Sqaure napkeen stand',
        category:'Sqaure napkeen stand',
        code: '10110',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/10101/sqaure napkeen stand.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Paper holder',
        category:'Paper holder',
        code: '10111',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/10101/paper holder.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Towel rack',
        category:'Towel rack',
        code: '40401',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/40401/towel rack.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Towel rod',
        category:'Towel rod',
        code: '40402',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/40401/towel rod.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Single soap dish',
        category:'Single soap dish',
        code: '40403',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/40401/single soap dish.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Double soap dish',
        category:'Double soap dish',
        code: '40404',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/40401/double soap dish.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Tumler holder',
        category:'Tumler holder',
        code: '40405',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/40401/tumler holder.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'liquid dispencer',
        category:'Liquid dispencer',
        code: '40406',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/40401/liquid dispencer.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Soap with tumler holder',
        category:'Soap with tumler holder',
        code: '40407',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/40401/soap with tumler holder.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Soap with liquid',
        category:'Soap with liquid',
        code: '40408',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/40401/soap with liquid.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Rob hook',
        category:'Rob hook',
        code: '40409',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/40401/rob hook.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Napkeen ring',
        category:'Napkeen ring',
        code: '40409',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/40401/napkeen ring.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Paper holder',
        category:'Paper holder',
        code: '40409',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/40401/paper holder.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Towel rack',
        category:'Towel rack',
        code: '5001',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/5001/towel rack.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Towel rod',
        category:'Towel rod',
        code: '5002',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/5001/towel rod.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Single soap dish',
        category:'Single soap dish',
        code: '5003',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/5001/single soap dish.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Double soap dish',
        category:'Double soap dish',
        code: '5004',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/5001/double soap dish.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Single tumler',
        category:'Single tumler',
        code: '5005',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/5001/single tumler.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Soap with tumler',
        category:'Soap with tumler',
        code: '5007',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/5001/soap with tumler.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Self with soap & tumler',
        category:'Self with soap & tumler',
        code: '5008',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/5001/self with soap & tumler.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Self bath',
        category:'Self bath',
        code: '5009',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/5001/self bath.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Napkeen stand',
        category:'Napkeen stand',
        code: '5010',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/5001/napkeen stand.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Paper holder',
        category:'Paper holder',
        code: '5011',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/5001/paper holder.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Towel rack',
        category:'Towel rack',
        code: '6001',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/6001/towel rack.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Towel rod',
        category:'Towel rod',
        code: '6002',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/6001/towel rod.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Double soap dish',
        category:'Double soap dish',
        code: '6003',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/6001/double soap dish.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Soap with tumler',
        category:'Soap with tumler',
        code: '6004',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/6001/soap with tumler.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Single tumler',
        category:'Single tumler',
        code: '6005',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/6001/single tumler.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Liquid dispensor',
        category:'Liquid dispensor',
        code: '6006',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/6001/liquid dispensor.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Rob hook',
        category:'Rob hook',
        code: '6007',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/6001/rob hook.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Towel rack',
        category:'Towel rack',
        code: '2001',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/2001/towel rack.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Towel rod',
        category:'Towel rod',
        code: '2002',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/2001/towel rod.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Single soap dish',
        category:'Single soap dish',
        code: '2003',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/2001/single soap dish.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Double soap dish',
        category:'Double soap dish',
        code: '2004',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/2001/double soap dish.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Single tumler',
        category:'Single tumler',
        code: '2005',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/2001/single tumler.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Liquid dispensor',
        category:'Liquid dispensor',
        code: '2006',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/2001/liquid dispensor.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Soap with tumler',
        category:'Soap with tumler',
        code: '2007',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/2001/soap with tumler.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Bath self',
        category:'Bath self',
        code: '2008',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/2001/bath self.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Robe hook',
        category:'Robe hook',
        code: '2009',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/2001/robe hook.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Squre napkeen stand',
        category:'Squre napkeen stand',
        code: '2010',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/2001/squre napkeen stand.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Paper holder',
        category:'Paper holder',
        code: '2011',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/2001/paper holder.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Towel rack',
        category:'Towel rack',
        code: '3001',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/3001/towel rack.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Towel rod',
        category:'Towel rod',
        code: '3002',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/3001/towel rod.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Single soap dish',
        category:'Single soap dish',
        code: '3003',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/3001/single soap dish.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Double soap dish',
        category:'Double soap dish',
        code: '3004',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/3001/double soap dish.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Single tumler',
        category:'Single tumler',
        code: '3005',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/3001/single tumler.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Liquid dispensor',
        category:'Liquid dispensor',
        code: '3006',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/3001/liquid dispensor.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Soap with tumler',
        category:'Soap with tumler',
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
        category:'Square napkeen stand',
        code: '3010',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/3001/square napkeen stand.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Paper holder',
        category:'Paper holder',
        code: '3011',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/3001/paper holder.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Towel rack',
        category:'Towel rack',
        code: '4001',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/4001/towel rack.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Towel rod',
        category:'Towel rod',
        code: '4002',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/4001/towel rod.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Single soap dish',
        category:'Single soap dish',
        code: '4003',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/4001/single soap dish.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Double soap dish',
        category:'Double soap dish',
        code: '4004',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/4001/double soap dish.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Single tumler',
        category:'Single tumler',
        code: '4005',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/4001/single tumler.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Liquid dispensor',
        category:'Liquid dispensor',
        code: '4006',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/4001/liquid dispensor.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Soap with tumler',
        category:'Soap with tumler',
        code: '4007',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/4001/soap with tumler.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Bath self with soap and tumler',
        category:'Bath self with soap and tumler',
        code: '4008',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/4001/bath self with soap and tumler.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Robe hook',
        category:'Robe hook',
        code: '4009',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/4001/robe hook.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Napkeen stand',
        category:'Napkeen stand',
        code: '4010',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/4001/napkeen stand.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Paper holder',
        category:'Paper holder',
        code: '4011',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/4001/paper holder.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Bath self',
        category:'Bath self',
        code: '4012',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/4001/bath self.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Liquid dispencer',
        category:'Liquid dispencer',
        code: '1001',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/1001/liquid dispencer.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Bath self',
        category:'Bath self',
        code: '1002',
        modelNo:'',
        price:200,
        productImage:'../../assets/products/S.S - 202/1001/bath self.jpg',
        description:'',
        allImages:[]
      },
      {
        name:'Paper holder',
        category:'Paper holder',
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
