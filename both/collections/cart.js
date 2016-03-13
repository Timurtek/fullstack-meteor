Cart = new Mongo.Collection("cart");

Cart.helpers({
  cartproduct:function(){
    return Product.findOne({_id:this.product});
  },
  image:function(){
    if(this.img){
      return this.img;
    }else{
      return 'http://i.ebayimg.com/images/i/271723310731-0-1/s-l1000.jpg';
    }
  }
});
