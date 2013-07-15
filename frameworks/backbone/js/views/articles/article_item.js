define(
	[
		'text!templates/articles/item.html'
	],
	function(articleItem) {

	return Backbone.View.extend({
		tagName: 'li',
		template: _.template(articleItem),

		events: {
			'click .comments-link': 'show'
		},

		render: function() {
			this.$el.html(this.template(this.model.toJSON()));

			return this;
		},

		teardown: function() {
			this.stopListening();
		},

		show: function(e) {
			e.preventDefault();

			router.navigate('articles/' + this.model.id, { trigger: true });
		}
	});
});
