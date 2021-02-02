(function($) {
	$.keyboard.keyboards.qwerty	= [
		['@',{text:'1',cap:'_'},'2',{text:'3',cap:'"'},{text:'4',cap:"'"},{text:'5',cap:'('},{text:'6',cap:'-'},'7',{text:'8',cap:')'},'9','0',{text:'←',name:'backSpace',action:function(e){return false;}}],
		[{text:'⇥', cap: {text:'⇤'},name:'tab', action:false},'q','w','e','r','t','y','u','i','o','p',{text:'←',name:'return'}],
		[{text:'⇪',name:'capsLock',action:function(e){e.keyboard('capToggle',true); return false;}},'a','s','d','f','g','h','j','k','l','+'],
		[{text:'⇧',name:'leftShift',action:function(e){e.keyboard('capToggle'); return false;}},'z','x','c','v','b','n','m', {text:',', cap:'?'},'.',{text:'!'},{text:'⇧',name:'rightShift',action:function(e){e.keyboard('capToggle'); return false;}}],
		[{label: 'Space', text:' ', name:'space'}]
	];
})(jQuery);