define(
	[
		'models/article',
		'models/comment',
		'collections/comments',
		'views/comments/comments',
		'text!templates/articles/article.html'
	],
	function(Article, Comment, CommentsCollection, CommentsView, articleShow) {

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

			this.commentsCollection = new CommentsCollection();
			this.commentsCollection.articleId = this.options.articleId;

			this.commentsView = new CommentsView({ collection: this.commentsCollection });
		},

		// Tommy James Marshall DID THIS!
		assign: function(view, selector) {
			view.setElement(this.$(selector));
		},

		render: function() {
			this.$el.html(this.template(this.model.toJSON()));

			this.assign(this.commentsView, '#comments');

			return this;
		},

		teardown: function() {
			this.commentsView.teardown();

			this.stopListening();
		},

		createComment: function(e) {
			e.preventDefault();

			var comment = new Comment();
			comment.articleId(this.model.id);

			this.listenTo(comment, 'error', this.createCommentError);
			this.listenTo(comment, 'sync', this.createCommentSuccess);

			var attrs = this.$('.comment-form').serializeArray();

			_.each(attrs, function(attr) {
				comment.set(attr.name, attr.value);
			}, this);

			comment.save();
		},

		createCommentSuccess: function(model, response, options) {
			this.stopListening(model);

			// Not working?
			this.$('.comment-form').val('');
		},

		createCommentError: function(model, xhr, options) {
			this.stopListening(model);

			this.$('.form-errors').html(xhr.responseText);
		}
	});
});
