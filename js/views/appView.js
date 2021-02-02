define('appView',[
	'backbone',
	'text!views/appTemplate.html',
	], function(Backbone, AppTemplate) {

	'use strict';

	var AppView = Backbone.View.extend({
		el: '#app',

		template: _.template(AppTemplate),

		initialize: function() {
			var self = this;
		},

		render: function(subviewsIds) {
			var data = {
				subviewsIds: subviewsIds
			}

			this.$el.html(this.template(data));
		}


	});

	return AppView;

});


