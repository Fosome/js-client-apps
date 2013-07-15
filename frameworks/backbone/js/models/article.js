define(function() {
	return Backbone.Model.extend({
		urlRoot: '/articles',

		defaults: {
			title: null,
			url: null,
			points: null
		}
	});
});
