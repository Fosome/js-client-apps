define(
	[
		'views/sessions/new',
		'views/accounts/new',
		'views/accounts/edit',
		'views/articles/articles'
	],
	function(
		SessionsNewView,
		AccountsNewView,
		AccountsEditView,
		ArticlesView
	) {

	return Backbone.Router.extend({
		routes: {
			'': 'index',
			'sessions/new': 'sessionsNew',
			'accounts/new': 'accountsNew',
			'account/edit': 'accountsEdit',
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

		accountsEdit: function() {
			console.log('routed to accounts#edit');

			var accountsEdit = new AccountsEditView().render();
		},

		articlesIndex: function() {
			console.log('routed to articles#index');

			var articlesView = new ArticlesView().render();
		}
	});
});
