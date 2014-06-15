App.LeadsNewController = Ember.Controller.extend({
  actions: {
    createLead: function() {
      var self = this;
      var fields = this.get('fields');
      var lead = this.store.createRecord('lead', fields);
      lead.save().then(function() {
        self.transitionToRoute('lead', lead)
      });
    }
  }
});
