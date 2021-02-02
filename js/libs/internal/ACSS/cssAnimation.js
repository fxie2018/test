(function (factory) {
if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module depending on jQuery.
    define(['jquery'], factory);
} else {
    // No AMD. Register plugin with global jQuery object.
    factory(jQuery);
}
}(function ($) {

    $.fn.slideTo = function( pDestX , pDestY , pTime , pCallback )
    {
        if ( typeof pCallback != 'undefined' )
        {
            this.on( 'webkitTransitionEnd', function transitionEnd( event )
            {

                if ( event.target == this && event.originalEvent.propertyName == '-webkit-transform' )
                {
                    pCallback();
                    $( this ).unbind( 'webkitTransitionEnd', transitionEnd );
                }
            } );
        }
        var left = window.getComputedStyle( this.get( 0 ) ).left;
        var top = window.getComputedStyle( this.get( 0 ) ).top;
        left = Number( left.replace( 'px', '' ) );
        top = Number( top.replace( 'px', '' ) );
        this.css( '-webkit-transition', '-webkit-transform ' + pTime + 'ms ease' );
        this.css( '-webkit-transform', 'translate3D(' + ( pDestX - left ) + 'px, ' + ( pDestY - top ) + 'px, 0)' );
        this.data( 'transform-left', pDestX - left );
        this.data( 'transform-top', pDestY - top );
        return this;
    };

    $.fn.slideToX = function( pDestX , pTime , pCallback )
    {
        var left = window.getComputedStyle( this.get( 0 ) ).left;
        left = Number( left.replace( 'px', '' ) );
     
        var oldTranslateLeft = this.data( 'transform-left' );
        
        if ( !oldTranslateLeft )
            oldTranslateLeft = 0;
        
        if ( pDestX - ( this.position().left + oldTranslateLeft ) == 0 ) {
            if ( pDestX - left != oldTranslateLeft ) {
                this.css( '-webkit-transform', 'translate3D(' + ( pDestX - left ) + 'px, 0, 0)' );
            }
        
            if ( typeof pCallback != 'undefined' )
                pCallback();
            
            return this;
        }
        
        if ( typeof pCallback != 'undefined' )
        {
            this.on( 'webkitTransitionEnd', function transitionEnd( event )
            {

                if ( event.target == this && event.originalEvent.propertyName == '-webkit-transform' )
                {
                    pCallback();
                    $( this ).unbind( 'webkitTransitionEnd', transitionEnd );
                }
            } );
        }
        
        this.css( '-webkit-transition', '-webkit-transform ' + pTime + 'ms ease' );
        this.css( '-webkit-transform', 'translate3D(' + ( pDestX - left ) + 'px, 0, 0)' );
        this.data( 'transform-left', pDestX - left );
        return this;
    };

    $.fn.slideToY = function( pDestY , pTime , pCallback )
    {
        var top = window.getComputedStyle( this.get( 0 ) ).top;
        top = Number( top.replace( 'px', '' ) );
       
        var oldTranslateTop = this.data( 'transform-top' );
        
        if ( !oldTranslateTop )
            oldTranslateTop = 0;
        
        if ( pDestY - ( this.position().top + oldTranslateTop ) == 0 ) {
            if ( pDestY - top != oldTranslateTop ) {
                this.css( '-webkit-transform', 'translate3D(0, ' + ( pDestY - top ) + 'px, 0)' );
            }

            if ( typeof pCallback != 'undefined' )
                pCallback();
            
            return this;
        }
        
        if ( typeof pCallback != 'undefined' )
        {
            this.on( 'webkitTransitionEnd', function transitionEnd( event )
            {

                if ( event.target == this && event.originalEvent.propertyName == '-webkit-transform' )
                {
                    pCallback();
                    $( this ).unbind( 'webkitTransitionEnd', transitionEnd );
                }
            } );
        }
        
        this.css( '-webkit-transition', '-webkit-transform ' + pTime + 'ms ease' );
        this.css( '-webkit-transform', 'translate3D(0, ' + ( pDestY - top ) + 'px, 0)' );
        this.data( 'transform-top', pDestY - top );
        return this;
    };

    var defaultFadeOpts =
        {
            duration : 1000,
            delay : 0,
            complete : null,
        };

    var defaultFadeInOpts = $.extend(
        {
            startValue : 0,
            endValue : 1,
            autoShow : true
        }, defaultFadeOpts );

    var defaultFadeOutOpts = $.extend(
        {
            startValue : 1,
            endValue : 0,
            autoHide : true
        }, defaultFadeOpts );

    $.fn.fadeIn = function( pTime , pCallback )
    {
        var options;
    	
        if ( typeof arguments[0] == 'object' ) {
            options = $.extend( {}, defaultFadeInOpts, arguments[0] );
            pTime = options.duration;
        } else {
            options = $.extend( {}, defaultFadeInOpts );
    	}
    		
        if ( typeof pCallback == 'function' ) {
            options.complete = pCallback;
    	}
    	
        if ( options.autoShow && this.css('display') == 'none' ) {
    		this.css({"opacity" : 0});
    		this.show();
        }

        this.css(
            {
                '-webkit-transition' : 'none',
                '-webkit-transition-property' : '',
                '-webkit-transition-delay' : '',
                '-webkit-transition-duration' : '',
                '-webkit-transition-timing-function' : '',
            } );
        
        this.each( function() {
            var style = window.getComputedStyle( this );
            if ( style )
                style.opacity;
        } );
    	
        var delta = Math.abs( ( Math.round( Number( this.css( 'opacity' ) ) * 1000 ) / 1000 ) - options.endValue );

        if ( delta > 0.1 && pTime != 0) {
    	
            this.on( 'webkitTransitionEnd', function transitionEnd( event )
            {
                if ( event.target == this && event.originalEvent.propertyName == 'opacity' )
                {

                    var jQueryDiv = $( this );

                    if ( options.complete )
                    {
                        options.complete();
                    }
                    jQueryDiv.unbind( 'webkitTransitionEnd', transitionEnd );
                }
            } );
            // launch transition
            this.css(
                {
                    '-webkit-transition' : 'opacity ' + pTime + 'ms ease ' + options.delay + 'ms',
                    'opacity' : options.endValue
                } );
        } else {
    	
    		if ( pTime == 0 ) {
    			this.css( 'opacity', options.endValue );
    		}
    		
            if ( options.complete ) {
                options.complete();
            }
        }
        return this;
    };

    $.fn.fadeOut = function( pTime , pCallback )
    {
        var options;
    	
        if ( typeof arguments[0] == 'object' )
        {
            options = $.extend( {}, defaultFadeOutOpts, arguments[0] );
            pTime = options.duration;
        } else {
            options = $.extend( {}, defaultFadeOutOpts );
    	}

        if ( typeof pCallback == 'function' ) {
            options.complete = pCallback;
    	}

        this.css(
            {
                '-webkit-transition' : 'none',
                '-webkit-transition-property' : '',
                '-webkit-transition-delay' : '',
                '-webkit-transition-duration' : '',
                '-webkit-transition-timing-function' : '',
            } );
        
        this.each( function() {
            var style = window.getComputedStyle( this );
            if ( style ) {
                style["-webkit-transition"];
                style.opacity;
            }
        } );

        var delta =  Math.abs( ( Math.round( Number( this.css( 'opacity' ) ) * 1000 ) / 1000 ) - options.endValue );

        if ( delta > 0.1 && pTime != 0 && this.is(':visible')) {
    	
            this.on( 'webkitTransitionEnd', function transitionEnd( event )
            {
                if ( event.target == this && event.originalEvent.propertyName == 'opacity' ) {

                    var jQueryDiv = $( this );

                    if ( options.autoHide ) {
                        jQueryDiv.hide();
                    }

                    if ( options.complete ) {
                        options.complete();
                    }
    				
                    jQueryDiv.unbind( 'webkitTransitionEnd', transitionEnd );
                }
            } );
            // launch transition
            this.css(
                {
                    '-webkit-transition' : 'opacity ' + pTime + 'ms ease ' + options.delay + 'ms',
                    'opacity' : options.endValue
                } );
    			
        } else {
    		
    		if ( !this.is(':visible') ) {
    			this.css(
    				{
    					'-webkit-transition' : 'opacity ' + pTime + 'ms ease ' + options.delay + 'ms',
    					'opacity' : options.endValue
    				} );
    		}
    		
    		if ( pTime == 0 ) {
    			this.css( 'opacity', options.endValue );
    		}
    		
            if ( options.autoHide ) {
    			$( this ).hide();
    		}

            if ( options.complete ) {
                options.complete();
            }
        }
    	
        return this;
    };



}));