define(['collections/articles', 'text!templates/articles/list.html'], function(ArticlesCollection, articlesList) {
	return Backbone.View.extend({
		el: "#content",
		template: _.template(articlesList),

		initialize: function() {
			this.collection = new ArticlesCollection();

			this.listenToOnce(this.collection, 'sync', this.render);

			this.collection.fetch();
		},

		render: function() {
			this.$el.html(this.template({ articles: this.collection.models }));

			return this;
		}
	});
});
