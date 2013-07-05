define(['collections/articles', 'text!templates/articles/list.html'], function(ArticlesCollection, articlesList) {
	return Backbone.View.extend({
		el: "#content",
		template: _.template(articlesList),

		initialize: function() {
			this.collection = new ArticlesCollection([
				{ user_id: 1, title: "Beans Beans the Magical Fruit", url: "http://www.google.com" },
				{ user_id: 2, title: "Ruby + Backbone", url: "http://www.reddit.com" },
				{ user_id: 3, title: "Hello World!!", url: "http://www.amazon.com" }
			]);
		},

		render: function() {
			this.$el.html(this.template({ articles: this.collection.models }));

			return this;
		}
	});
});
