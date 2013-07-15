define(
	[
		'models/article',
		'models/comment',
		'models/vote',
		'collections/comments',
		'views/comments/comments',
		'text!templates/articles/article.html'
	],
	function(Article, Comment, Vote, CommentsCollection, CommentsView, articleShow) {

	return Backbone.View.extend({
		el: "#content",
		template: _.template(articleShow),

		events: {
			'click .vote': 'vote',
			'submit .comment-form': 'createComment'
		},

		initialize: function() {
			this.model = new Article({ id: this.options.articleId });

			this.listenTo(this.model, 'sync', this.render);

			this.model.fetch();

			this.commentsCollection = new CommentsCollection();
			this.commentsCollection.articleId = this.options.articleId;

			this.commentsView = new CommentsView({ collection: this.commentsCollection });
		},

		// Tommy James Marshall DID THIS!
		assign: function(view, selector) {
			view.setElement(this.$(selector)).render();
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

		vote: function(e) {
			e.preventDefault();

			var vote = new Vote();
			vote.articleId = this.model.id;

			this.listenTo(vote, 'error', this.createVoteError);
			this.listenTo(vote, 'sync', this.createVoteSuccess);

			vote.save();
		},

		createVoteSuccess: function(model, response, options) {
			this.stopListening(model);

			this.model.fetch();
		},

		createVoteError: function(model, xhr, options) {
			this.stopListening(model);

			this.$('.vote-errors').html(xhr.responseText);
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
