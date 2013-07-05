require.config({
	baseUrl: '/js',
	urlArgs: 'v=' + (new Date().getTime()),  //remove for production

	paths: {
		jquery: 'vendor/jquery/jquery-min',
		underscore: 'vendor/underscore/underscore-min',
		backbone: 'vendor/backbone/backbone-min',
		templates: '../templates'
	},

	shim: {
		jquery: {
			exports: '$'
		},
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: ['vendor/underscore/underscore-min', 'vendor/jquery/jquery-min'],
			exports: 'backbone'
		}
	}
});

require(['backbone'], function(){
	require(['routers/router'], function(Router) {
		var router = new Router();

		Backbone.history.start();
	});
});
