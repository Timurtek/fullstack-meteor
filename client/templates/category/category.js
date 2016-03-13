Session.setDefault("isCheckingOut", false);

Template.category.onCreated(function(){
  this.subscribe('products');
});

Template.category.helpers({
  categoryName: function(){
     return FlowRouter.getParam('categoryName');
  },
  products:function(){
    return Product.find();
  },
  isCheckingOut:function(){
    return Session.equals('isCheckingOut',true);
  }
});

Template.categoryAdmin.events({
  'click .addCategory':function(event,template){
    var category = {};
    category.name = template.find('#categoryName').value;
    Meteor.call('addCategory',category);
  }
});
