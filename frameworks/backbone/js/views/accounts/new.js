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

			this.listenTo(this.model, 'error', this.createError);
			this.listenTo(this.model, 'sync', this.createSuccess);
		},

		render: function() {
			this.$el.html(this.template());

			return this;
		},

		teardown: function(){
			this.stopListening();
		},

		create: function(e) {
			e.preventDefault();

			var attrs = this.$('.account-form').serializeArray();

			_.each(attrs, function(attr) {
				this.model.set(attr.name, attr.value);
			}, this);

			this.model.save();
		},

		createSuccess: function(model, response, options) {
			this.teardown();

			router.navigate('sessions/new', { trigger: true });
		},

		createError: function(model, xhr, options) {
			this.$('.form-errors').html(xhr.responseText);
		}
	});
});
