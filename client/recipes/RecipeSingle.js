Template.RecipeSingle.onCreated(function() {
  var self = this;
  self.autorun(function() { // unsub from old subscription
    var id = FlowRouter.getParam('id');
    self.subscribe('recipe', id); // template-level subscription
  });
});

Template.RecipeSingle.helpers({
  recipe: () => {
    let id = FlowRouter.getParam('id');
    return Recipes.findOne({_id: id});
  }
});
