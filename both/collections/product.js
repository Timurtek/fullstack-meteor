Product = new Mongo.Collection("product");
Product.helpers({
  //category relationship with product
  category:function(){
    return Category.findOne(this.categoryId);
  }
});
