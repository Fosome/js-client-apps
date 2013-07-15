define(
	[
		'collections/comments',
		'views/comments/comment_item',
		'text!templates/comments/list.html'
	],
	function(CommentsCollection, CommentItemView, commentsList) {

	return Backbone.View.extend({
		el: "#comments",
		template: _.template(commentsList),

		initialize: function() {
			this.listenToOnce(this.collection, 'sync', this.render);
			this.listenTo(this.collection, 'add', this.render);

			this.collection.fetch();
		},

		render: function() {
			this.$el.html(this.template());

			var list = document.createDocumentFragment();

			this.collection.each(function(comment) {
				var commentItem = new CommentItemView({ model: comment });
				list.appendChild(commentItem.render().el);
			}, this);

			$('.comments-list').html(list);

			return this;
		}
	});
});
