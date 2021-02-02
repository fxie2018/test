define('router',[
	'backbone',
	'appView',
	'searchView'
	], function(Backbone, AppView,SearchView) {
	'use strict';

	var appRouter = Backbone.Router.extend({
		initialize: function() {
			this.appView = new AppView();
			var subviewsIds = ['search'];
			this.appView.render(subviewsIds);
			this.searchView = new SearchView();
		},
		routes: {
			'':'search'
		},

		search: function() {
			var self = this;
			this.searchView.render();
		}
	});

	return appRouter;

});


