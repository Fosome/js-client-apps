define(function() {
	return Backbone.Model.extend({
		urlRoot: '/session',

	   defaults: {
		   email: null,
		   password: null
	   }
	});
});
