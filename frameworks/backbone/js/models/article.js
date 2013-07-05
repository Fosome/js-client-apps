define(function() {
	return Backbone.Model.extend({
		urlRoot: '/articles',

		defaults: {
			user_id: null,
			title: null,
			url: null
		}
	});
});
