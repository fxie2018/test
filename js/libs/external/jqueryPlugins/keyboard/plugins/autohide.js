(function($){
	
	var defaults = {
			idleDelay: 10000
	};
		/**
		 * autohide plugin for $.keyboard
		 * @param e
		 * @returns {$.keyboard.plugins.autoHide}
		 */
		$.keyboard.plugins.autoHide = function(e) {
			var keyboard = e.keyboard('keyboard');
			var scope = this;
			var options = $.extend( {}, defaults, e.keyboard( 'getOption', 'autoHide' ) );
			e.keyboard('bind', 'press', function(ev) { 
				clearTimeout( scope._timer );
			});
			
			e.keyboard('bind', 'release', function(ev){ 
				clearTimeout( scope._timer );
				scope._timer = setTimeout( scope._close, options.idleDelay);
			} );
			
			e.keyboard('bind', 'hide', function(ev){ 
				clearTimeout( scope._timer );
			} );
			
			e.keyboard('bind', 'show', function(ev){ 
				clearTimeout( scope._timer );
				scope._timer = setTimeout( scope._close, options.idleDelay);
				
			} );
			
			
			this._close = function()
			{
				keyboard.stop(true, true).slideUp({complete: function(){ e.keyboard('trigger', 'hide'); } });
			};
		};
		// end of autoHide plugin
})(jQuery);