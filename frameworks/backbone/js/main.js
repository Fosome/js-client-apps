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
			deps: ['vendor/jquery/jquery-min', 'vendor/underscore/underscore-min'],
			exports: 'backbone'
		}
	}
});

require(['jquery', 'underscore', 'backbone'], function(){
	require(['routers/router'], function(Router) {
		//Global router
		router = new Router();

		Backbone.history.start();
	});
});
