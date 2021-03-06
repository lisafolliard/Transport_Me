import DS from 'ember-data';

export default DS.Model.extend({
  question: DS.belongsTo('question', { async: true }),
  response: DS.attr(),
  name: DS.attr()
});
