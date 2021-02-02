(function($) {
	$.keyboard.keyboards.azerty	= [
		['@',{text:'1',cap:'_'},{text:'2', cap:'é'},{text:'3',cap:'"'},{text:'4',cap:"'"},{text:'5',cap:'('},{text:'6',cap:'-'},{text:'7',cap:'è'},{text:'8',cap:')'},{text:'9',cap:'ç'},{text:'0',cap:'à'},{text:'←',name:'backSpace',action:function(e){return false;}}],
		[{text:'⇥', cap: {text:'⇤'},name:'tab', action:true},'a','z','e','r','t','y','u','i','o','p',{label:'⏎' ,text:'\n',name:'return'}],
		[{text:'⇪',name:'capsLock',action:function(e){e.keyboard('capToggle',true); return false;}},'q','s','d','f','g','h','j','k','l','m'],
		[{text:'⇧',name:'leftShift',action:function(e){e.keyboard('capToggle'); return false;}},'w','x','c','v','b','n',{text:'!', cap:'?'},'.','_',{text:'-'},{text:'⇧',name:'rightShift',action:function(e){e.keyboard('capToggle'); return false;}}],
		[{label: 'Espace', text:' ', name:'space', cap:" "}]
	]
})(jQuery);

(function($) {
	$.keyboard.keyboards.azertyFID	= [
		
		['@','a','z','e','r','t','y','u','i','o','p',{text:'←',name:'backSpace',action:function(e){return false;}}],
		[{text:'⇪',name:'capsLock',action:function(e){e.keyboard('capToggle',true); return false;}},'q','s','d','f','g','h','j','k','l','m'],
		[{text:'⇧',name:'leftShift',action:function(e){e.keyboard('capToggle'); return false;}},'w','x','c','v','b','n',{text:'!', cap:'?'},'.','_',{text:'-'},{text:'⇧',name:'rightShift',action:function(e){e.keyboard('capToggle'); return false;}}],
		[{label: 'Espace', text:' ', name:'space', cap:" "}],
		[{text:'1'},{text:'2'},{text:'3'},{text:'4'},{text:'5'},{text:'6'},{text:'7'},{text:'8'},{text:'9'},{text:'0'}]
	]
})(jQuery);