define(
	[
		'views/sessions/new',
		'views/accounts/new',
		'views/articles/articles'
	],
	function(SessionsNewView, AccountsNewView, ArticlesView) {

	return Backbone.Router.extend({
		routes: {
			'': 'index',
			'sessions/new': 'sessionsNew',
			'accounts/new': 'accountsNew',
			'articles': 'articlesIndex'
		},

		index: function() {
			console.log('routed to index');
		},

		sessionsNew: function() {
			console.log('routed to sessions#new');

			var sessionsNew = new SessionsNewView().render();
		},

		accountsNew: function() {
			console.log('routed to accounts#new');

			var accountsNew = new AccountsNewView().render();
		},

		articlesIndex: function() {
			console.log('routed to articles#index');

			var articlesView = new ArticlesView().render();
		}
	});
});
