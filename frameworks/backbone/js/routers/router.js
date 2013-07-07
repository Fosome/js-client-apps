define(
	[
		'views/sessions/new',
		'views/accounts/new',
		'views/accounts/edit',
		'views/articles/articles',
		'views/articles/new'
	],
	function(
		SessionsNewView,
		AccountsNewView,
		AccountsEditView,
		ArticlesView,
		ArticlesNewView
	) {

	return Backbone.Router.extend({
		routes: {
			'': 'index',
			'sessions/new': 'sessionsNew',
			'accounts/new': 'accountsNew',
			'account/edit': 'accountsEdit',
			'articles': 'articlesIndex',
			'articles/new': 'articlesNew'
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

			var articles = new ArticlesView().render();
		},

		articlesNew: function() {
			console.log('routed to articles#new');

			var articlesNew = new ArticlesNewView().render();
		}
	});
});
