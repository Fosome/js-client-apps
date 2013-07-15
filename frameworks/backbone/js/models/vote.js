define(function() {
	return Backbone.Model.extend({
		urlRoot: function() {
			return '/articles/' + this.articleId + '/votes';
		}
	});
});
