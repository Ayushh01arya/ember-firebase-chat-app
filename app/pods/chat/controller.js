import Ember from 'ember';
const {
  Controller,
  computed,
  inject
} = Ember;
const {alias} = computed;

export default Controller.extend({
  application: inject.controller(),
  currentUser: alias('application.currentUser'),

  actions: {
    submitMessage(message){
      const currentUser = this.get('currentUser');
      if (currentUser === undefined){
        return;
      }
      this.store.createRecord('message', {
        content: message,
        user: currentUser,
        createdAt: new Date()
      }).save();
    },

    destroyMessage(message){
      message.destroyRecord();
    },

    goTo(route){
      this.transitionToRoute(route);
    }
  }
});
