Template.category.onCreated(function(){
  this.subscribe('products');
});
Template.category.helpers({
  categoryName: function(){
     return FlowRouter.getParam('categoryName');
  },
  products:function(){
    return Product.find();
  }
});
Template.categoryAdmin.events({
  'click .addCategory':function(event,template){
    var category = {};
    category.name = template.find('#categoryName').value;
    Meteor.call('addCategory',category);
  }
});
