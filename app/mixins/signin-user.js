import Ember from 'ember';
const {
  Mixin
} = Ember;

export default Mixin.create({
  authenticateUser(email, password){
    this.get('session').authenticate('authenticator:firebase', {
      'email': email,
      'password': password
    }).then(function() {
      this.transitionToRoute('index');
    }.bind(this));
  }
});