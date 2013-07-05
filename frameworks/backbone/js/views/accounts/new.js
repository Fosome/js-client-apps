define(
	[
		'models/user',
		'text!templates/accounts/new.html'
	],
	function(User, accountsNew) {

	return Backbone.View.extend({
		el: "#content",
		template: _.template(accountsNew),

		events: {
			'submit .account-form': 'create'
		},

		initialize: function() {
			this.model = new User();
		},

		render: function() {
			this.$el.html(this.template());

			return this;
		},

		create: function(e) {
			e.preventDefault();

			var attrs = this.$('.account-form').serializeArray();

			_.each(attrs, function(attr) {
				this.model.set(attr.name, attr.value);
			}, this);

			this.model.save({
				success: this.createSuccess,
				error: this.createError
			});
		},

		createSuccess: function(attrs, model, options) {
			alert('user saved success');
		},

		createError: function(attrs, xhr, options) {
			alert('user saved error');
		}
	});
});
