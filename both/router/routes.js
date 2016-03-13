FlowRouter.route(['/','home'],{
  subscriptions:function(){
    this.register("categoriesList", Meteor.subscribe("category"));
    this.register("productsList", Meteor.subscribe("products"));
  },
  action:function(){
    FlowLayout.render('layout',{sidebar:'sidebar', main:'home', cart:'cart'});
  }
});

//Register
FlowRouter.route('/register',{
  action:function(){
    FlowLayout.render('layout',{sidebar:'', main:'register', cart:''});
  }
});

//Signin
FlowRouter.route('/signin',{
  action:function(){
    FlowLayout.render('layout',{sidebar:'', main:'signin', cart:''});
  }
});

//Profile
FlowRouter.route('/profile',{
  action:function(){
    FlowLayout.render('layout',{sidebar:'', main:'profile', cart:''});
  }
});
//Admin
FlowRouter.route('/admin',{
  subscriptions:function(){
    this.register("categoriesList", Meteor.subscribe("category"));
    this.register("productsList", Meteor.subscribe("products"));
  },
  action:function(){
  if(Roles.userIsInRole(Meteor.userId(),'admin')){
      FlowLayout.render('layout',{sidebar:'', main:'admin', cart:''});
    }
  else{
      FlowLayout.render('layout',{sidebar:'', main:'unauthorized', cart:''});
    }
  }

});

//Signout
FlowRouter.route('/signout',{
  action:function(){
  //logout from the session
  Meteor.logout(function(err){
    //if there is not error redirect user to the signin page
    if(!err){
      FlowRouter.go('/signin');
    }
  });
  }
});

//Checkout
FlowRouter.route('/checkout',{
  action:function(){
    FlowLayout.render('layout',{sidebar:'', main:'checkout', cart:''});
  }
});




FlowRouter.route('/category/:categoryName',{
  subscriptions:function(params){
    this.register("catlist", Meteor.subscribe("category"));
    this.register("catproducts", Meteor.subscribe("categoryProducts",params.categoryName));
    //make sure subs do exist
  },
  triggersEnter:function(params){
    console.log("TRIGGERS ENTER",params);
    //check that user is logged in
  },
  triggersExit:function(params){
    console.log("EXIT", params);
    //check that there is no unsaved data.
  },
  action:function(){
    FlowLayout.render('layout',{sidebar:'sidebar', main:'category', cart:'cart'});
  }
});
