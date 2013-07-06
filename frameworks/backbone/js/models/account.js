define(function() {
	return Backbone.Model.extend({
		url: '/account',

		defaults: {
			username: null,
			email: null
		}
	});
});
