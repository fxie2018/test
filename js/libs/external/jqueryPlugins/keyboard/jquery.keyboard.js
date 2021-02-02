// jQuery Plugin Boilerplate
// A boilerplate for jumpstarting jQuery plugins development
// version 1.0, Jun 24th, 2011
// by François Germain

( function( $ )
{

    // Static private vars
    var pluginName = 'keyboard', emptyKey =
        {
            // Static public vars
            text : '',
            alt : [],
            name : ''
        };
    /**
     * @constructor
     * @param {HTMLElement} context element
     * @param {Object} options
     */
    $[pluginName] = function( dom , options )
    {
        var plugin = this, element = $( dom ), defaults =
            {
                elements :
                    {
                        keyboard : '<div class="keyboard"></div>',
                        row : '<ul class="keyboard-row"></ul>',
                        key : '<li class="keyboard-key"></li>',
                        alt : '<ul class="keyboard-alt"></ul>',
                        altKey : '<li class="keyboard-alt-key"></li>'
                    },
                altDelay : 500,
                classPrefix : 'keyboard',
                keyboard : [],
                plugin : function( e )
                {
                    e[pluginName]( 'bind', 'print', function( e , o )
                    {
                        // console.log(o.text);
                    } );
                }
            }, settings = {},
        // TODO: clean all this vars
        keyboard, timer = NaN, rows = [], keys = {},
        cap = true, locked = false, keyPressed = false,

        // Private methods
        init = function( rows )
        {
            // Settings
            settings = $.extend( true, {}, defaults, options );
            if ( typeof settings.plugin !== 'object' )
            {
                settings.plugin =
                    [ settings.plugin ];
            }

            // Keyboard
            keyboard = $( settings.elements.keyboard ).appendTo( element );
            plugin.methods.keyboard( settings.keyboard );

            // Events
            $( document ).unbind( 'mouseup.' + pluginName ).bind( 'mouseup.' + pluginName, function()
            {
                releaseKey();
            } );

            // Plugins
            for ( var i = 0, len = settings.plugin.length; i < len; i++ )
            {
                plugin.methods.plug( settings.plugin[i] );
            }
        }, 
        
        releaseKey = function( key , alt )
        {
            if ( keyPressed && !keyPressed.hasClass('disabled') )
            {
                keyPressed.removeClass( settings.classPrefix + '-held' );
                keyPressed = null;
                clearTimeout( timer );
                timer = NaN;
                if ( typeof key !== 'undefined' )
                {
                    if ( typeof alt === 'undefined' )
                    {
                        alt = false;
                    }
					var _cap = cap;
                    var text = alt !== false ? ( cap ? key.cap.alt[alt] : key.alt[alt] ) : ( cap ? key.cap.text : key.text );
                    if ( key.action !== false && ( !key.action || key.action( element ) !== false ) )
                    {
                        trigger( 'print',
                            {
                                key : key,
                                cap : cap,
                                alt : alt,
                                text : text
                            } );
                        if ( !locked && cap )
                        {
                            plugin.methods.capToggle();
                        }
                    }
                    trigger( 'release',
                        {
                            key : key,
                            cap : _cap,
                            alt : alt,
                            text : text
                        } );
                }
            }
        }, isValidRow = function( row )
        {
            return typeof row === 'number' && row === Math.round( row );
        }, newKeyboard = function( newKeyboard )
        {
            keyboard.html( '' );
            keys = {};
            rows = [];
            for ( var i = 0, len = newKeyboard.length; i < len; i++ )
            {
                plugin.methods.addRow( newKeyboard[i] );
            }
        }, newRow = function( row )
        {
            var i = rows.length;
            while ( i <= row )
            {
                rows.push( [] );
                keyboard.append( settings.elements.row );
                i++;
            }
        },
        whenKeyIsReleased = function( ev )
        {
            if ( keyPressed )
            {
                releaseKey(  keyPressed.data( pluginName + '-key' ) );
            }
        },
        whenKeyIsPressed = function( ev ) {
                keyPressed = $(ev.target);
                timer = setTimeout( function()
                {
					if ( !keyPressed )
						return;
					
                    keyPressed.addClass( settings.classPrefix + '-held' );
                    trigger( 'press', keyPressed );
                }, settings.altDelay );
        },
        newKey = function( row , key )
        {
            if ( typeof key !== 'object' )
            {
				try
				{
                key =
                    {
                        text : key,
						cap: {
							text: key.toUpperCase()
						}
                    };
				}catch (Err){
					console.log(key + " row : " + row);
				}
            }
            key = $.extend( {}, emptyKey, key );
            if ( typeof key.cap !== 'object' )
            {
                if ( typeof key.cap !== 'undefined' )
                {
                    key.cap =
                        {
                            text : key.cap
                        };
                } else
                {
                    key.cap = {};
                }
            }
            if ( typeof key.cap.alt === 'undefined' )
            {
                key.cap.alt = [];
                for ( var i = 0, len = key.alt.length; i < len; i++ )
                {
                    key.cap.alt[i] = key.alt[i].toUpperCase();
                }
            }
            if ( typeof key.cap.text === 'undefined' )
            {
                key.cap.text = key.text.toUpperCase();
            }
            rows[row].push( key );
            
            var keyEl = $( settings.elements.key ).appendTo( keyboard.children( ':eq(' + row + ')' ) );
            
            keyEl.data( pluginName + '-key', key );
            
			if ( key.label )
				keyEl.text( key.label );
			else
				keyEl.text( cap ? key.cap.text : key.text );
            
            if ( key.name )
            {
                keyEl.addClass( settings.classPrefix + '-key-' + key.name );
            }
            updateAlts( keyEl );
            
            keys[ "name" in key && key.name.length ? key.name : key.text] = keyEl;
            
            keyEl.unbind( 'mouseup.' + pluginName ).bind( 'mouseup.' + pluginName, whenKeyIsReleased );
            
            keyEl.unbind( 'mousedown.' + pluginName ).bind( 'mousedown.' + pluginName, whenKeyIsPressed );
        },
       
        updateAlts = function( keyEl )
        {
            var key = keyEl.data( pluginName + '-key' );
            if ( key.alt )
            {
                var altEl = $( settings.elements.alt ).appendTo( keyEl ), altKeyEl;
                for ( var k = 0, len = key.alt.length; k < len; k++ )
                {
                    altKeyEl = $( settings.elements.altKey ).appendTo( altEl );
                    altKeyEl.data( pluginName + '-key', key );
                    altKeyEl.data( pluginName + '-alt', k );
                    altKeyEl.text( cap ? key.cap.alt[k] : key.alt[k] );
                    altKeyEl.unbind( 'mouseup.' + pluginName ).bind( 'mouseup.' + pluginName, function()
                    {
                        releaseKey( $( this ).data( pluginName + '-key' ), $( this ).data( pluginName + '-alt' ) );
                    } );
                }
            }
        }, updateKeys = function()
        {
            var i, j, len, lenj;
            for ( i = 0, len = rows.length; i < len; i++ )
            {
                var rowEl = keyboard.children( ':eq(' + i + ')' );
                for ( j = 0, lenj = rows[i].length; j < lenj; j++ )
                {
                    var key = rows[i][j];
                    var keyEl = rowEl.children( ':eq(' + j + ')' );
                    if ( keyEl )
                    {
					
						if ( key.label )
							keyEl.text( key.label );
						else
							if ( cap )
							{
								// if( key.cap )
								keyEl.text( key.cap.text );
							} else
							{
								keyEl.text( key.text );
							}
                        updateAlts( keyEl );
                    }
                }
            }
        }, trigger = function()
        {
            arguments[0] = pluginName + '-' + arguments[0];
            element.trigger.apply( element, arguments );
            return dom;
        };

        // Public methods
        plugin.methods =
            {
                getOption : function( pName )
                {
                    if ( !arguments.length )
                        return options;
                    else
                    {
                        var path = options, key;
                        for ( var i = 0, len = arguments.length; i < len; i++ )
                        {
                            key = arguments[i].toString();
                            if ( key in path )
                            {
                                path = path[key];
                            } else
                                return null;
                        }
                        return path;
                    }
                },
                bind : function()
                {
                    arguments[0] = pluginName + '-' + arguments[0];
                    element.bind.apply( element, arguments );
                    return dom;
                },
                trigger : function( ev )
                {
                    return trigger.apply( null, arguments );
                },
                addRow : function( keys )
                {
                    var row = rows.length;
                    newRow( row );
                    for ( var i = 0, len = keys.length; i < len; i++ )
                    {
                        newKey( row, keys[i] );
                    }
                    return dom;
                },
                addKeys : function( row , keys )
                {
                    if ( isValidRow( row ) )
                    {
                        if ( !rows[row] )
                        {
                            newRow( row );
                        }
                        for ( var i = 0, len = keys.length; i < len; i++ )
                        {
                            newKey( row, keys[i] );
                        }
                    }
                    return dom;
                },
                addKey : function( row , key )
                {
                    if ( isValidRow( row ) )
                    {
                        if ( !rows[row] )
                        {
                            newRow( row );
                        }
                        newKey( row, key );
                    }
                    return dom;
                },
                getKey : function( id )
                {
                     return keys[id];
                },
                disableKey: function( id ) 
                {
                    var key = plugin.methods.getKey( id );
                    if( key ) {
                        key.addClass('disabled');
                        key.unbind( 'mouseup.' + pluginName );
                        key.unbind( 'mousedown.' + pluginName );
                        key.css('pointer-events', 'none');
                    }
                    
                },
                enableKey: function( id )
                {
                    var key = plugin.methods.getKey( id );
                    if( key ) {
                        key.removeClass('disabled');
                        key.unbind( 'mouseup.' + pluginName ).bind( 'mouseup.' + pluginName, whenKeyIsReleased );
                        key.unbind( 'mousedown.' + pluginName ).bind( 'mousedown.' + pluginName, whenKeyIsPressed );
                        key.css('pointer-events', '');
                    }
                },
                enableKeys: function( ids ) {
                    if( ids.length ) {
                        element.find( '.'+settings.classPrefix+'-key' ).not('.'+settings.classPrefix+'-key-backSpace').addClass('disabled').unbind( 'mouseup.' + pluginName ).unbind( 'mousedown.' + pluginName ).css('pointer-events', 'none');
                        $.each( ids, function(i, ele) { plugin.methods.enableKey( ele.toLowerCase() ); } );
                    } else 
                    {
                        element.find( '.'+settings.classPrefix+'-key' ).not('.'+settings.classPrefix+'-key-backSpace').removeClass('disabled').unbind( 'mouseup.' + pluginName ).bind( 'mouseup.' + pluginName, whenKeyIsReleased ).unbind( 'mousedown.' + pluginName ).bind( 'mousedown.' + pluginName, whenKeyIsPressed ).css('pointer-events', '');
                    }
                },
                plug : function( newPlugin )
                {
                    if ( typeof newPlugin === 'string' )
                    {
                        newPlugin = $[pluginName].plugins[newPlugin];
                    }
                    if ( typeof newPlugin === 'function' )
                    {
                        newPlugin( element );
                    }
                },
                capToggle : function( lock )
                {
                    cap = !cap;
                    locked = Boolean( lock ) && cap;
                    var keys = $( '.keyboard .keyboard-key' );
                    if ( cap && locked )
                    {
                        keys.addClass( 'keyboard-capsLocked' );
                        // element
                        keys.removeClass( 'keyboard-caps' );
                    } else if ( cap )
                    {
                        keys.addClass( 'keyboard-caps' );
                        keys.removeClass( 'keyboard-capsLocked' );
                    } else
                    {
                        keys.removeClass( 'keyboard-caps' );
                        keys.removeClass( 'keyboard-capsLocked' );
                    }
                    updateKeys();
                    return dom;
                },
                cap : function( lock )
                {
                    cap = true;
                    locked = Boolean( lock );
                    var keys = $( '.keyboard .keyboard-key' );
                    if ( cap && locked )
                    {
                        keys.addClass( 'keyboard-capsLocked' );
                        keys.removeClass( 'keyboard-caps' );
                    } else
                    {
                        keys.addClass( 'keyboard-caps' );
                        keys.removeClass( 'keyboard-capsLocked' );
                    }
                    updateKeys();
                    return dom;
                },
                unCap : function()
                {
                    cap = false;
                    locked = false;
                    var keys = $( '.keyboard .keyboard-key' );
                    keys.removeClass( 'keyboard-caps' );
                    keys.removeClass( 'keyboard-capsLocked' );
                    updateKeys();
                    return dom;
                },
                keyboard : function( def )
                {
                    if ( typeof def === 'string' )
                    {
                        def = $[pluginName].keyboards[def];
                    }
                    if ( typeof def === 'object' )
                    {
                        newKeyboard( def );
                    }
                    return keyboard;
                }
            };

        element.data( pluginName, plugin );
        init();

    };
    $[pluginName].keyboards = {};
    $[pluginName].plugins = {};

    $.fn[pluginName] = function( options )
    {
        var args = arguments, chain = this;
        this.each( function()
        {
            var i = $( this );
            var plugin, r;

            if ( undefined == ( plugin = i.data( pluginName ) ) )
            {
                plugin = new $[pluginName]( this, options );
            }
            if ( plugin.methods[options] )
            {
                if ( ( r = plugin.methods[options].apply( plugin, Array.prototype.slice.call( args, 1 ) ) ) !== this )
                {
                    chain = r;
                    return false;
                }
            }
        } );
        return chain;
    };

} )( jQuery );