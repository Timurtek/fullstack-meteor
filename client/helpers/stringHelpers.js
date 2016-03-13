Template.registerHelper("avatar", function(){
  if(Meteor.user() && Meteor.user().profile.avatar ){
    return Meteor.user().profile.avatar;
  }else{
    return 'https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg';
  }
});
Template.registerHelper("ratings", function(comp,val){
  return val >= comp ? 'price-text-color':'';
});
Template.registerHelper("currency", function(value){
  return '$' + ' '+ Number(value).toFixed(2);
});
Template.registerHelper("truncate", function(input,strlen){
  var shortened = input.substring(0,strlen);
  return new Spacebars.SafeString(shortened);
});
