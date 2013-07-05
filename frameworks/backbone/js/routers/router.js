define(
	[
		'views/accounts/new',
		'views/articles/articles'
	],
	function(AccountsNewView, ArticlesView) {

	return Backbone.Router.extend({
		routes: {
			'': 'index',
			'accounts/new': 'accountsNew',
			'articles': 'articlesIndex'
		},

		index: function() {
			console.log('routed to index');
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
