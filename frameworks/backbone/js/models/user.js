define(function() {
	return Backbone.Model.extend({
		urlRoot: '/users',

		defaults: {
			username: null,
			email: null
		}
	});
});
