import DS from 'ember-data';
var attr = DS.attr;
var hasMany = DS.hasMany;

export default DS.Model.extend({
  name: attr('string'),
  avatar:   attr('string'),

  messages: hasMany('message', {
    inverse: 'user'
  })
});