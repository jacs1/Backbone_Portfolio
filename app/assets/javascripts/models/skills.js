app.models.Skills = Backbone.Model.extend({

  localStorage: new Backbone.LocalStorage('portfolio')

  initialize: function() {
    this.bind("change", this.updateSkill);
  },
  updateSkill: function() {
    this.attributes.title;
  });
