"use strict";(self.webpackChunkultrabathingconcepts=self.webpackChunkultrabathingconcepts||[]).push([[930],{5930:(M,p,c)=>{c.r(p),c.d(p,{CategoryWiseProductModule:()=>y});var m=c(177),u=c(3887),d=c(830),r=c(9969),t=c(4438),g=c(6241),h=c(708);const f=["scrollContainer"],C=i=>({delay:i}),v=i=>({value:"",params:i});function P(i,s){if(1&i){const e=t.RV6();t.j41(0,"div",27)(1,"div",28),t.bIt("click",function(){const o=t.eBV(e).$implicit,a=t.XpG();return t.Njj(a.moreProductDetails(o))})("mousemove",function(o){const a=t.eBV(e).$implicit,l=t.XpG();return t.Njj(l.onMouseMove(o,a))}),t.j41(2,"div",29),t.nrm(3,"img",30),t.j41(4,"div",31)(5,"span",32),t.EFF(6,"View Details"),t.k0s()()(),t.j41(7,"div",33)(8,"h6",34),t.EFF(9),t.k0s(),t.j41(10,"p",23),t.EFF(11),t.k0s()(),t.j41(12,"div",35),t.bIt("@ripple.done",function(){t.eBV(e);const o=t.XpG();return t.Njj(o.onAnimationDone())}),t.k0s()()()}if(2&i){const e=s.$implicit,n=s.index,o=t.XpG();t.R7$(),t.Y8G("@fadeInUp",t.eq3(11,v,t.eq3(9,C,100*n))),t.R7$(2),t.Y8G("src",e.productImage,t.B4B),t.R7$(6),t.JRh(e.name),t.R7$(2),t.SpI("Code: ",e.code,""),t.R7$(),t.xc7("left",o.rippleX,"px")("top",o.rippleY,"px"),t.Y8G("@ripple",o.rippleState)}}function _(i,s){if(1&i){const e=t.RV6();t.j41(0,"div",36)(1,"div",37),t.bIt("click",function(){const o=t.eBV(e).$implicit,a=t.XpG();return t.Njj(a.selectedImage(o.image))}),t.nrm(2,"img",38),t.j41(3,"p",39),t.EFF(4),t.k0s()()()}if(2&i){const e=s.$implicit;t.R7$(2),t.Y8G("src",null==e?null:e.image,t.B4B),t.R7$(2),t.SpI("Code: ",e.code,"")}}const x=[{path:"",component:(()=>{class i{constructor(e,n,o){this.productService=e,this.renderer=n,this.el=o,this.allProductList=[],this.batchSize=8,this.currentPage=1,this.isLoading=!1,this.rippleState="inactive",this.rippleX=0,this.rippleY=0}ngOnInit(){this.getAllProducts()}ngAfterViewInit(){this.initCursorFollower()}onScroll(){this.scrollContainer.nativeElement.scrollHeight-this.scrollContainer.nativeElement.scrollTop<=this.scrollContainer.nativeElement.clientHeight&&this.loadMoreProducts()}onMouseMove(e,n){const o=e.target.getBoundingClientRect();this.rippleX=e.clientX-o.left,this.rippleY=e.clientY-o.top,this.rippleState="active"}onAnimationDone(){this.rippleState="inactive"}initCursorFollower(){const e=this.renderer.createElement("div");this.renderer.addClass(e,"cursor-follower"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.listen("document","mousemove",n=>{this.renderer.setStyle(e,"left",`${n.clientX}px`),this.renderer.setStyle(e,"top",`${n.clientY}px`)})}loadMoreProducts(){if(!this.isLoading){this.isLoading=!0;const e=this.getProductsBatch(this.batchSize,this.currentPage);e.length>0&&(e.forEach((n,o)=>{n.animationClass="product-animation"}),this.allProductList=[...this.allProductList,...e],this.currentPage++),this.isLoading=!1}}getProductsBatch(e,n){const o=(n-1)*e,a=o+e;return this.productService.getCategoryWiseProducts().slice(o,a)}getAllProducts(){this.allProductList=this.productService.getCategoryWiseProducts()}moreProductDetails(e){this.productDetail=e,this.selectedProductImage=this.productDetail.allImages[0].image}selectedImage(e){this.selectedProductImage=e}static{this.\u0275fac=function(n){return new(n||i)(t.rXU(g.b),t.rXU(t.sFG),t.rXU(t.aKT))}}static{this.\u0275cmp=t.VBU({type:i,selectors:[["app-category-wise-product"]],viewQuery:function(n,o){if(1&n&&t.GBs(f,7),2&n){let a;t.mGM(a=t.lsd())&&(o.scrollContainer=a.first)}},hostBindings:function(n,o){1&n&&t.bIt("scroll",function(l){return o.onScroll(l)},!1,t.tSv)},decls:41,vars:7,consts:[["id","wrapper",1,"wrapper"],[1,"tm-breadcrumb-area","breadcrumb-area"],["width","100%","height","400px","src","../../assets/bathservice-lp-spotlight.jpg"],["routerLink","/"],[1,"page-content",2,"padding-top","-100px"],[1,"tm-products-area","tm-section","tm-padding-section","bg-white"],[1,"container"],[1,"tm-shop-products"],[1,"row","mt-30-reverse"],["class","col-xl-3 col-lg-4 col-md-6 col-sm-6 my-3 col-12 mt-50",4,"ngFor","ngForOf"],["id","moreDetailsDialog","tabindex","-1","aria-labelledby","moreDetailsDialog","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog","modal-dialog-centered","modal-xl"],[1,"modal-content"],[1,"modal-header"],["id","moreDetailsDialog",1,"modal-title"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],[1,"modal-body"],[1,"row"],[1,"col-lg-6","col-md-12"],[1,"product-main-image"],["alt","Selected Product",1,"selected-image",3,"src"],[1,""],[1,"product-name"],[1,"product-code"],[1,"product-description",3,"innerHTML"],[1,"related-products"],["class","col-4 mt-3 details-image",4,"ngFor","ngForOf"],[1,"col-xl-3","col-lg-4","col-md-6","col-sm-6","my-3","col-12","mt-50"],["data-bs-toggle","modal","data-bs-target","#moreDetailsDialog",1,"product-card",3,"click","mousemove"],[1,"product-image-wrapper"],["alt","product image","loading","lazy",1,"img-product",3,"src"],[1,"product-overlay"],[1,"view-details"],[1,"product-info"],[1,"product-title"],[1,"ripple-effect"],[1,"col-4","mt-3","details-image"],[1,"related-product-item",3,"click"],["alt","Related Product",3,"src"],[1,"item-code"]],template:function(n,o){1&n&&(t.j41(0,"div",0)(1,"div",1),t.nrm(2,"img",2),t.j41(3,"div")(4,"h2"),t.EFF(5,"Category Products"),t.k0s(),t.j41(6,"p")(7,"span",3),t.EFF(8,"Home "),t.k0s(),t.EFF(9,"/ Category"),t.k0s()()(),t.j41(10,"main",4)(11,"div",5)(12,"div",6)(13,"div",7)(14,"div",8),t.DNE(15,P,13,13,"div",9),t.k0s()()()()(),t.nrm(16,"app-footer"),t.k0s(),t.j41(17,"div",10)(18,"div",11)(19,"div",12)(20,"div",13)(21,"h5",14),t.EFF(22),t.k0s(),t.nrm(23,"button",15),t.k0s(),t.j41(24,"div",16)(25,"div",17)(26,"div",18)(27,"div",19),t.nrm(28,"img",20),t.k0s()(),t.j41(29,"div",18)(30,"div",21)(31,"h3",22),t.EFF(32),t.k0s(),t.j41(33,"p",23),t.EFF(34),t.k0s(),t.nrm(35,"div",24),t.k0s(),t.j41(36,"div",25)(37,"h4"),t.EFF(38,"Related Products"),t.k0s(),t.j41(39,"div",17),t.DNE(40,_,5,2,"div",26),t.k0s()()()()()()()()),2&n&&(t.R7$(15),t.Y8G("ngForOf",o.allProductList),t.R7$(7),t.SpI("",null==o.productDetail?null:o.productDetail.name," Details"),t.R7$(6),t.Y8G("src",o.selectedProductImage,t.B4B),t.R7$(4),t.JRh(null==o.productDetail?null:o.productDetail.name),t.R7$(2),t.SpI("Code: ",null==o.productDetail?null:o.productDetail.code,""),t.R7$(),t.Y8G("innerHTML",null==o.productDetail?null:o.productDetail.description,t.npT),t.R7$(5),t.Y8G("ngForOf",null==o.productDetail?null:o.productDetail.allImages))},dependencies:[m.Sq,h.n,d.Wk],styles:[".breadcrumb-area[_ngcontent-%COMP%]{position:relative}.breadcrumb-area[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{position:absolute!important;top:40%;left:10%;color:#fff;cursor:pointer}.selected-image[_ngcontent-%COMP%]{width:450px;height:auto;border-radius:5px}.details-image[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{opacity:60%;border-radius:10px;transition:.5s;border-color:#f10}.img-product[_ngcontent-%COMP%]{width:1600px;height:220px}.product-animation[_ngcontent-%COMP%]{animation-name:_ngcontent-%COMP%_slideFromBottom;animation-duration:5.8s;animation-timing-function:ease-out;animation-fill-mode:forwards}@keyframes _ngcontent-%COMP%_slideFromBottom{0%{transform:translateY(100%);opacity:0}to{transform:translateY(0);opacity:1}}.product-card[_ngcontent-%COMP%]{background-color:#fff;border-radius:8px;box-shadow:0 4px 6px #0000001a;transition:all .3s ease;cursor:pointer;overflow:hidden;position:relative;border:2px solid #9b0b02}.product-card[_ngcontent-%COMP%]:hover{transform:translateY(-5px);box-shadow:0 8px 15px #0003;border-color:#f10}.product-image-wrapper[_ngcontent-%COMP%]{position:relative;overflow:hidden}.img-product[_ngcontent-%COMP%]{width:100%;height:280px;object-fit:contain;transition:transform .3s ease}.product-card[_ngcontent-%COMP%]:hover   .img-product[_ngcontent-%COMP%]{transform:scale(1.05)}.product-overlay[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;background-color:#00000080;display:flex;justify-content:center;align-items:center;opacity:0;transition:opacity .3s ease}.product-card[_ngcontent-%COMP%]:hover   .product-overlay[_ngcontent-%COMP%]{opacity:1}.view-details[_ngcontent-%COMP%]{color:#fff;font-weight:700;text-transform:uppercase;letter-spacing:1px}.product-info[_ngcontent-%COMP%]{padding:15px;text-align:center}.product-title[_ngcontent-%COMP%]{margin-bottom:5px;font-weight:700;color:#333}.product-code[_ngcontent-%COMP%]{font-size:.9em;color:#666}.modal-content[_ngcontent-%COMP%]{border:none;border-radius:15px;overflow:hidden;box-shadow:0 10px 30px #0000001a}.modal-header[_ngcontent-%COMP%]{background-color:#9b0b02;color:#fff;border-bottom:none;padding:20px 30px}.modal-title[_ngcontent-%COMP%]{font-weight:700;font-size:1.5rem;color:#fff}.modal-body[_ngcontent-%COMP%]{padding:30px}.product-main-image[_ngcontent-%COMP%]{text-align:center;margin-bottom:20px}.selected-image[_ngcontent-%COMP%]{max-width:100%;height:auto;border-radius:10px;box-shadow:0 5px 15px #0000001a}.product-name[_ngcontent-%COMP%]{font-size:1.8rem;font-weight:700;color:#333;margin-bottom:10px}.product-code[_ngcontent-%COMP%]{font-size:1rem;color:#666;margin-bottom:15px}.product-description[_ngcontent-%COMP%]{font-size:1rem;line-height:1.6;color:#444}.related-products[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:1.4rem;font-weight:700;color:#333;margin-bottom:20px}.related-product-item[_ngcontent-%COMP%]{cursor:pointer;transition:all .3s ease;border-radius:8px;overflow:hidden;box-shadow:0 3px 10px #0000001a;border:2px solid #9b0b02}.related-product-item[_ngcontent-%COMP%]:hover{transform:translateY(-5px);box-shadow:0 5px 15px #0003}.related-product-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:auto;border-radius:8px 8px 0 0}.item-code[_ngcontent-%COMP%]{font-size:.9rem;color:#666;text-align:center;padding:10px;margin:0;background-color:#f8f8f8}@keyframes _ngcontent-%COMP%_modalFadeIn{0%{opacity:0;transform:translateY(-50px)}to{opacity:1;transform:translateY(0)}}.modal.fade[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_modalFadeIn .3s ease-out}@media (max-width: 992px){.product-main-image[_ngcontent-%COMP%]{margin-bottom:30px}}"],data:{animation:[(0,r.hZ)("productAnimation",[(0,r.wk)("in",(0,r.iF)({opacity:1,transform:"translateY(0)"})),(0,r.kY)(":enter",[(0,r.iF)({opacity:0,transform:"translateY(100%)"}),(0,r.i0)("2s ease-out")])]),(0,r.hZ)("fadeInUp",[(0,r.kY)(":enter",[(0,r.iF)({opacity:0,transform:"translateY(20px)"}),(0,r.i0)("0.5s ease-out",(0,r.iF)({opacity:1,transform:"translateY(0)"}))])]),(0,r.hZ)("ripple",[(0,r.wk)("active",(0,r.iF)({transform:"scale(2)",opacity:0})),(0,r.kY)("* => active",(0,r.i0)("0.4s ease-out"))])]}})}}return i})()}];let b=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=t.$C({type:i})}static{this.\u0275inj=t.G2t({imports:[d.iI.forChild(x),d.iI]})}}return i})(),y=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=t.$C({type:i})}static{this.\u0275inj=t.G2t({imports:[m.MD,u.G,b]})}}return i})()}}]);