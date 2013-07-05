define(['models/article'], function(Article) {
	var Articles = Backbone.Collection.extend({
		url: '/articles',
		model: Article
	});

	return Articles;
});
