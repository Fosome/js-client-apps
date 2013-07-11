define(
	[
		'models/article',
		'models/comment',
		'text!templates/articles/article.html'
	],
	function(Article, Comment, articleShow) {

	return Backbone.View.extend({
		el: "#content",
		template: _.template(articleShow),

		events: {
			'submit .comment-form': 'createComment'
		},

		initialize: function() {
			this.model = new Article({ id: this.options.articleId });

			this.listenToOnce(this.model, 'sync', this.render);

			this.model.fetch();
		},

		render: function() {
			this.$el.html(this.template(this.model.toJSON()));

			return this;
		},

		teardown: function() {
			this.stopListening();
		},

		createComment: function(e) {
			e.preventDefault();

			var comment = new Comment();
			comment.articleId(this.model.id);

			var attrs = this.$('.comment-form').serializeArray();

			_.each(attrs, function(attr) {
				comment.set(attr.name, attr.value);
			}, this);

			comment.save();
		}
	});
});
