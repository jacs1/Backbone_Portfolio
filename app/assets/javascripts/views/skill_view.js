app.views.SkillView = Backbone.View.extend({

  tagName: 'div',
  className: 'skill',
  template: _.template($('#project-template').html()),
  events: {
    'dblclick .project-name': 'editProjectName',
    'keypress .edit-title': 'updateTitle',
    'click .add-skill': 'addSkill'
  },
 addSkill: function() {
    this.$el.show();
    this.model.append();
  }
});