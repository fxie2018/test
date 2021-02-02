(function($) {
	$.keyboard.keyboards.azertyCovea	= [
		[{text:'0',cap:'à'},{text:'1',cap:'_'},{text:'2', cap:'é'},{text:'3',cap:'"'},{text:'4',cap:"'"},{text:'5',cap:'('},{text:'6',cap:'-'},{text:'7',cap:'è'},{text:'8',cap:')'},{text:'9',cap:'ç'}],
		['#','a','z','e','r','t','y','u','i','o','p',{text:'←',name:'backSpace',action:function(e){return false;}}],
		[{text:'⇪',name:'capsLock',action:function(e){e.keyboard('capToggle',true); return false;}},'q','s','d','f','g','h','j','k','l','m',{label:'⏎' ,text:'\n',name:'return'}],
		[{label: 'Espace', text:' ', name:'space'},'w','x','c','v','b','n','?','.',':','@'],
		[]
	]
})(jQuery);

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
		['@',{text:'1',cap:'_'},{text:'2', cap:'é'},{text:'3',cap:'"'},{text:'4',cap:"'"},{text:'5',cap:'('},{text:'6',cap:'-'},{text:'7',cap:'è'},{text:'8',cap:')'},{text:'9',cap:'ç'},{text:'0',cap:'à'},{text:'←',name:'backSpace',action:function(e){return false;}}],
		['a','z','e','r','t','y','u','i','o','p'],
		[{text:'⇪',name:'capsLock',action:function(e){e.keyboard('capToggle',true); return false;}},'q','s','d','f','g','h','j','k','l','m'],
		[{text:'⇧',name:'leftShift',action:function(e){e.keyboard('capToggle'); return false;}},'w','x','c','v','b','n',{text:'!', cap:'?'},'.','_',{text:'-'},{text:'⇧',name:'rightShift',action:function(e){e.keyboard('capToggle'); return false;}}],
		[{label: 'Espace', text:' ', name:'space', cap:" "}]
	]
})(jQuery);

(function($) {
	$.keyboard.keyboards.azertyEuro	= [
		['@',{text:'1',cap:'_'},{text:'2', cap:'é'},{text:'3',cap:'"'},{text:'4',cap:"'"},{text:'5',cap:'('},{text:'6',cap:'-'},{text:'7',cap:'è'},{text:'8',cap:')'},{text:'9',cap:'ç'},{text:'0',cap:'à'},{text:'←',name:'backSpace',action:function(e){return false;}}],
		['€','a','z','e','r','t','y','u','i','o','p',{label:'⏎' ,text:'\n',name:'return'}],
		[{text:'⇪',name:'capsLock',action:function(e){e.keyboard('capToggle',true); return false;}},'q','s','d','f','g','h','j','k','l','m'],
		[{text:'⇧',name:'leftShift',action:function(e){e.keyboard('capToggle'); return false;}},'w','x','c','v','b','n',{text:'!', cap:'?'},'.','_',{text:'-'}],
		[{label: 'Espace', text:' ', name:'space', cap:" "}]
	]
})(jQuery);

(function($) {
	$.keyboard.keyboards.azertySodexo = [
		['@',{text:'1',cap:'_'},{text:'2', cap:'é'},{text:'3',cap:'"'},{text:'4',cap:"'"},{text:'5',cap:'('},{text:'6',cap:'-'},{text:'7',cap:'è'},{text:'8',cap:')'},{text:'9',cap:'ç'},{text:'0',cap:'à'},{text:'←',name:'backSpace',action:function(e){return false;}}],
		[{text:'⇥', cap: {text:'⇤'},name:'tab', action:true},'a','z','e','r','t','y','u','i','o','p',{label:'⏎' ,text:'\n',name:'return'}],
		[{text:'⇪',name:'capsLock',action:function(e){e.keyboard('capToggle',true); return false;}},'q','s','d','f','g','h','j','k','l','m'],
		[{text:'⇧',name:'leftShift',action:function(e){e.keyboard('capToggle'); return false;}},'w','x','c','v','b','n',{text:',', cap:'?'},{text:';', cap:'.'},{text:':', cap:'/'},{text:'!', cap:'%'},{text:'⇧',name:'rightShift',action:function(e){e.keyboard('capToggle'); return false;}}],
		[{label: 'Espace', text:' ', name:'space', cap:" "}]
	]
})(jQuery);

(function($) {
	$.keyboard.keyboards.azertySNCF = [
		[{text:'', action:function(e){return false;}},{text:'1',cap:'_'},{text:'2', cap:'é'},{text:'3',cap:'"'},{text:'4',cap:"'"},{text:'5',cap:'('},{text:'6',cap:'-'},{text:'7',cap:'è'},{text:'8',cap:')'},{text:'9',cap:'ç'},{text:'0',cap:'à'},{text:'', action:function(e){return false;}}],
		['#','a','z','e','r','t','y','u','i','o','p',{text:'←',name:'backSpace',action:function(e){return false;}}],
		['@','q','s','d','f','g','h','j','k','l','m',{label:'⏎' ,text:'\n',name:'return'}],
		[{text:'⇧',name:'leftShift',action:function(e){e.keyboard('capToggle'); return false;}},'w','x','c','v','b','n',{text:',', cap:'?'},{text:';', cap:'.'},{text:':', cap:'/'},{text:'!', cap:'%'},{text:'⇧',name:'rightShift',action:function(e){e.keyboard('capToggle'); return false;}}],
		['a', 'a', 'a', {label: 'Espace', text:' ', name:'space', cap:" "}, 'a', 'a', {text:'', action:function(e){return false;}}]
	]
})(jQuery);

(function($) {
	$.keyboard.keyboards.azertyCollabs	= [
		['1','2','3','4','5','6','7','8','9','0',{text:'←',name:'backSpace',action:function(e){return false;}}],
		['a','z','e','r','t','y','u','i','o','p'],
		['q','s','d','f','g','h','j','k','l','m'],
		['w','x','c','v','b','n','m','.','-','\''],
        [{label: '', text:' ', name:'space'},{label:'⏎' ,text:'\n',name:'return'}]
	];
})(jQuery);