Template.cart.helpers({
  cartitems: function(){
     return Cart.find();
  }
});
Template.cart.events({
  'click .checkOutButton': function(evt,tmpl){
    Session.set('isCheckingOut',true);
  },
  'click .delFromCart':function(evt,tmpl){
    console.log(evt,tmpl);
  }
});
