require.config({
	baseUrl: '/js',
	urlArgs: 'v=' + (new Date().getTime()),  //remove for production

	paths: {
		jquery: 'vendor/jquery/jquery-min',
		jqueryCookie: 'vendor/jquery/jquery.cookie',
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

require(['jquery', 'jqueryCookie', 'underscore', 'backbone'], function(){
	require(['routers/router', 'models/session'], function(Router, Session) {

		//Global
		//
		sessionManager = {
			token: function() {
				return $.cookie('session-token');
			},

			isLoggedIn: function() {
				return !_.isUndefined(this.token());
			},

			setToken: function(token) {
				$.cookie('session-token', token, { path: '/' });
			}
		};

		var backboneSync = Backbone.sync;

		Backbone.sync = function(method, model, options) {
			options = options || {};
			options.headers = options.headers || {};

			options.headers['Content-Type'] = 'application/json';
			options.headers['X-User-Token'] = sessionManager.token();

			//return Backbone.Model.prototype.fetch.apply(this, [options]);

			return backboneSync.call(model, method, model, options);
		};

		router = new Router();

		Backbone.history.start();
	});
});
