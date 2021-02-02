'use strict'

require.config({
	shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		}
	},



	paths: {
		jquery: 'libs/external/jquery/jquery',
		underscore: 'libs/external/underscore',
		backbone: 'libs/external/backbone',
		text: 'libs/external/text',

		//UTILS
		dateParser: 'utils/dateParser/dateParser',
		//contentParser: 'utils/contentParser/contentParser',

		cssAnimation: 'libs/internal/ACSS/cssAnimation',


		//CONF
		fluxConf:'conf/fluxConf',
		requestConf:'conf/requestConf',
		//ROUTER
		router: 'router/router',

		//VIEWS - MAIN
		appView:'views/appView',
		searchView:'views/searchView/searchView',
		showView:'views/showView/showView',
		// MODELS
		showModel:'models/fluxModels/showModel/showModel'
	}
});

require([
		'backbone',
		'router',
		'cssAnimation'

	], function (Backbone, Router ) {

		// Initialize routing and start Backbone.history()
		new Router();
		Backbone.history.start();
	});
