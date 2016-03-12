Template.register.events({
  'submit form':function(e){
    e.preventDefault();

    var email = e.target.email.value;
    var password = e.target.password.value;
    var firstname = e.target.firstname.value;
    var lastname = e.target.lastname.value;

    Accounts.createUser({
      email:email,
      password:password,
      firstname:firstname,
      lastname:lastname
    });
  }
});
