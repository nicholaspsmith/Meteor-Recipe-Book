Template.Menu.onCreated(function() {
  var self = this;
  self.autorun(function() { // unsub from old subscription
    self.subscribe('recipes'); // template-level subscription
  });
});

Template.Menu.helpers({
  recipes: () => {
    return Recipes.find({ inMenu: true });
  }
});
