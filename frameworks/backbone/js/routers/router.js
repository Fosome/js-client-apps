define(
	[
		'views/sessions/new',
		'views/accounts/new',
		'views/accounts/edit',
		'views/articles/articles',
		'views/articles/article',
		'views/articles/new'
	],
	function(
		SessionsNewView,
		AccountsNewView,
		AccountsEditView,
		ArticlesView,
		ArticleView,
		ArticlesNewView
	) {

	return Backbone.Router.extend({
		routes: {
			'': 'index',
			'sessions/new': 'sessionsNew',
			'accounts/new': 'accountsNew',
			'account/edit': 'accountsEdit',
			'articles': 'articlesIndex',
			'articles/new': 'articlesNew',
			'articles/:id': 'articlesShow'
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
		},

		articlesShow: function(id) {
			console.log('routed to articles#show');

			var articlesShow = new ArticleView({ articleId: id }).render();
		}
	});
});
