define(
	[
		'models/article',
		'text!templates/articles/article.html'
	],
	function(Article, articleShow) {

	return Backbone.View.extend({
		el: "#content",
		template: _.template(articleShow),

		initialize: function() {
			this.model = new Article({ id: this.options.articleId });

			this.listenToOnce(this.model, 'sync', this.render);

			this.model.fetch();
		},

		render: function() {
			this.$el.html(this.template(this.model.toJSON()));

			return this;
		}
	});
});
