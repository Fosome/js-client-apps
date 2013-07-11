define(function() {
	return Backbone.Model.extend({
		articleId: null,

		urlRoot: function() {
			return '/articles/' + this.articleId + '/comments';
		},

		defaults: {
			body: null
		},

		articleId: function(articleId) {
			this.articleId = articleId;
		}
	});
});
