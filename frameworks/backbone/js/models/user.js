define(function() {
	return Backbone.Model.extend({
		urlRoot: '/users',

		defaults: {
			id: null,
			username: null,
			email: null,
		}
	});
});
