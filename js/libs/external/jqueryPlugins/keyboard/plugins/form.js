( function( $ )
{
    var defaults = {
        slide: true
    };
    
    $.keyboard.plugins.form = function( e )
    {
        function trace( e )
        {
            o = {};
            for ( i in e )
            {
                o[i] = e[i];
            }
        } 
		var Dvalue = e.keyboard( 'getOption', 'form' );
        var options = $.extend( {}, defaults, e.keyboard( 'getOption', 'form' ) );

        var input = null, blured = null, delay = 500, shown = false, keyboard = e.keyboard( 'keyboard' ), setFocus = function( e )
        {
            input = e;
            blured = false;
            e.get(0).scrollLeft = e.get(0).scrollWidth;
            if ( !shown && options.slide )
            {
                keyboard.stop( true, true ).slideDown(
                    {
                        complete : function()
                        {
                            e.keyboard( 'trigger', 'show' );
                        }
                    } );
                shown = true;
            }
        }, unsetFocus = function( e )
        {
            // IE trigger setFocus before blur
            if ( e.get( 0 ) === input.get( 0 ) )
            {
                blured = true;
                // Let time to a potencial blur event
                setTimeout( function()
                {
                    if ( blured )
                    {
                        input = null;
                        if ( shown  && options.slide )
                        {
                            keyboard.stop( true, true ).slideUp(
                                {
                                    complete : function()
                                    {
                                        e.keyboard( 'trigger', 'hide' );
                                    }
                                } );
                            shown = false;
                        }
                    }
                }, delay );
            }
        };

        // Use
        e.keyboard( 'bind', 'print', function( e , o )
        {
            if ( input )
            {

                if (input[0].maxLength > 0)
                    var maxLength = input[0].maxLength;
                else
                    var maxLength = 2000;

                var length = input[0].value.length; 
                if (length < maxLength){
                    input.selection().replace( o.text );
                    input.trigger( 'change' );
                    
                }
            }
        } );
        e.keyboard( 'bind', 'release', function( e , o )
        {
            if ( input !== null )
            {
                // Tabulation
                if ( o.key.name === 'tab' )
                {
                    if ( o.cap )
                    {
                        newInput = $( ":input:eq(" + ( $( ":input" ).index( input ) - 1 ) + ")" );
                    } else
                    {
                        newInput = $( ":input:eq(" + ( $( ":input" ).index( input ) + 1 ) + ")" );
                    }
                    if ( newInput.length )
                    {
                        input = newInput;
                    } else
                    {
                        return input.trigger( 'blur' );
                    }
                    // Submition
                } else if ( o.key.name === 'enter' )
                {
                    var form = input.parents( 'form' );
                    if ( form.length() > 0 )
                    {
                        form.submit();
                    }
                    // Delete backward
                } else if ( o.key.name === 'backSpace' )
                {
                    if ( input.selection().length() )
                    {
                        input.selection().clear();
                    } else
                    {
                        input.selection().set( input.selection().start() - 1, 1 ).clear();
                    }
                    // Move carret
                } else if ( o.key.name === 'leftArrow' )
                {
                    input.selection().set( input.selection().start() - 1, 0 );
                } else if ( o.key.name === 'rightArrow' )
                {
                    input.selection().set( input.selection().start() + 1, 0 );
                } else if ( o.key.name === 'reset' )
                {
                    input.val('');
                }
                input.get(0).scrollLeft = input.get(0).scrollWidth;
                input.trigger( 'focus' );
                input.trigger( 'input' );
                input.trigger( 'keyup' );
            }

        } );
        e.keyboard( 'bind', 'show', function( ev )
        {
            shown = true;
        } );
        e.keyboard( 'bind', 'hide', function( ev )
        {
            shown = false;
        } );

        // Show
        $( 'input[type="text"],input[type="password"],textarea' ).live( 'focus mousedown', function( e )
        {
            setFocus( $( e.target ) );
        } );

        // Hide
        $( 'input[type="text"],input[type="password"]textarea' ).bind( 'blur.keyboard', function( e )
        {
            unsetFocus( $( e.target ) );
        } );

        // Keyboard init
        if ( !keyboard.attr( 'tabindex' ) )
        {
            if ( input )
            {
                keyboard.attr( 'tabindex', '0' );
            }
        }
        keyboard.bind( 'focus', function()
        {
            input.trigger( 'focus' );
        } ).bind( 'mousedown.keyboard', function(ev)
        {
            blured = false;
            $(document.body).trigger(ev);
            return false;
        } )
        
        if( options.slide) keyboard.hide();
    };
} )( jQuery );