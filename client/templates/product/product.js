Template.product.events({
  'click .btn-product': function(event, template) {
    event.preventDefault();
    var id = template.data._id;
    console.log(id);
    if(Product.findOne(id).inCart) {
      // remove
      Product.update(id, {
        $set: {inCart: false}
      });

      Cart.remove(id);
    }
    else {
      // add
      Product.update(id, {
        $set: {inCart: true}
      });

      Cart.insert(template.data);
    }

  }
});
