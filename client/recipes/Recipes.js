Template.Recipes.onCreated(function() {
  var self = this;
  self.autorun(function() { // unsub from old subscription
    self.subscribe('recipes'); // template-level subscription
  });
});

Template.Recipes.helpers({
  recipes: () => {
    return Recipes.find();
  }
});

Template.Recipes.events({
  'click .new-recipe': () => {
    Session.set('newRecipe', true);
  }
});
