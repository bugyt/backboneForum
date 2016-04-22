'use strict';

(function() {


  app.Views.Post = Backbone.View.extend({

    template: _.template(JST.post),
    title: 'Post',


    initialize: function() {
      this.listenTo(this.model, 'sync', this.render);
      this.render();

    },

    render: function() {
      console.log(this.model.get('content'));
      this.setElement(this.template(this.model.toJSON()));
      this.$('#content').html(marked(this.model.get('content')));

      return this;

    },

    // Remove the item, destroy the model from *localStorage* and delete its view.
    clear: function() {
      this.model.destroy();
    }

  });

})();