Template.ShoppingList.onCreated(function() {
  var self = this;
  self.autorun(function() { // unsub from old subscription
    self.subscribe('recipes'); // template-level subscription
  });
});

Template.ShoppingList.helpers({
  shoppingList: () => {
    return Recipes.find({ inMenu: true });
  }
});
