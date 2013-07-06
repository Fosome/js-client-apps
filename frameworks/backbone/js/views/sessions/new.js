define(
	[
		'text!templates/sessions/new.html'
	],
	function(sessionsNew) {

	return Backbone.View.extend({
		el: "#content",
		template: _.template(sessionsNew),

		render: function() {
			this.$el.html(this.template());

			return this;
		},
	});
});
