define(
	[
		'collections/articles',
		'views/articles/article_item',
		'text!templates/articles/list.html'
	],
	function(ArticlesCollection, ArticleItemView, articlesList) {

	return Backbone.View.extend({
		el: "#content",
		template: _.template(articlesList),

		initialize: function() {
			this.collection = new ArticlesCollection();

			this.listenToOnce(this.collection, 'sync', this.render);

			this.collection.fetch();
		},

		render: function() {
			this.$el.html(this.template());

			var list = document.createDocumentFragment();

			this.collection.each(function(article) {
				var articleItem = new ArticleItemView({ model: article });
				list.appendChild(articleItem.render().el);
			}, this);

			$('.articles-list').html(list);

			return this;
		}
	});
});
