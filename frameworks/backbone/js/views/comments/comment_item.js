define(
	[
		'text!templates/comments/item.html'
	],
	function(commentItem) {
	
	return Backbone.View.extend({
		tagName: 'li',
		template: _.template(commentItem),

		render: function() {
			this.$el.html(this.template(this.model.toJSON()));

			return this;
		},

		teardown: function() {
			this.stopListening();
		}
	});
});
