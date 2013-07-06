define(
	[
		'models/session',
		'text!templates/sessions/new.html'
	],
	function(Session, sessionsNew) {

	return Backbone.View.extend({
		el: "#content",
		template: _.template(sessionsNew),

		events: {
			'submit .session-form': 'create'
		},

		initialize: function() {
			this.model = new Session();

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

			var attrs = this.$('.session-form').serializeArray();

			_.each(attrs, function(attr) {
				this.model.set(attr.name, attr.value);
			}, this);

			this.model.save();
		},

		createSuccess: function(attrs, response, options) {
			sessionManager.setToken(response.token);

			this.teardown();

			router.navigate('articles', { trigger: true });
		},

		createError: function(attrs, xhr, options) {
			this.$('.form-errors').html(xhr.responseText);

			console.log(xhr);
		}
	});
});
