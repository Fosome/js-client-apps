define(
	[
		'models/account',
		'text!templates/accounts/edit.html'
	],
	function(Account, accountsEdit) {

	return Backbone.View.extend({
		el: "#content",
		template: _.template(accountsEdit),

		events: {
			'submit .account-form': 'update'
		},

		initialize: function() {
			this.model = new Account();

			this.listenToOnce(this.model, 'sync', this.render);

			this.model.fetch();
		},

		render: function() {
			this.$el.html(this.template(this.model.toJSON()));

			return this;
		},

		teardown: function() {
			this.stopListening();
		},

		update: function(e) {
			e.preventDefault();

			var attrs_array = this.$('.account-form').serializeArray();

			var attrs = {};

			_.each(attrs_array, function(attr) {
				attrs[attr.name] = attr.value;
			}, this);

			this.model.unset('points');

			this.listenTo(this.model, 'error', this.updateError);
			this.listenTo(this.model, 'sync', this.updateSuccess);

			this.model.save(attrs);
		},

		updateSuccess: function(model, response, options) {
			this.teardown();

			router.navigate('articles', { trigger: true });
		},

		updateError: function(model, xhr, options) {
			this.$('.form-errors').html(xhr.responseText);
		}
	});
});
