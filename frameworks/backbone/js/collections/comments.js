define(['models/comment'], function(Comment) {
	return Backbone.Collection.extend({
		model: Comment,

		url: function() {
			return '/articles/1/comments'
		}
	});
});
