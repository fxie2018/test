(function($) {
	$.keyboard.keyboards.qwertyCovea	= [
		['0','1','2','3','4','5','6','7','8','9'],
		['q','w','e','r','t','y','u','i','o','p',{text:'←',name:'backSpace',action:function(e){return false;}}],
		['a','s','d','f','g','h','j','k','l','-',{label:'⏎' ,text:'\n',name:'return'}],
		['z','x','c','v','b','n','m','.',{text:'\''}],
		[{label: 'Espace', text:' ', name:'space'}]
	];
})(jQuery);

(function($) {
	$.keyboard.keyboards.qwertySimple	= [
		[{label:'',text:'←',name:'backSpace',action:function(e){return false;}}],
		['0','1','2','3','4','5','6','7','8','9'],
		['q','w','e','r','t','y','u','i','o','p'],
		['a','s','d','f','g','h','j','k','l','+'],
		['z','x','c','v','b','n','m', {label: 'Space', text:' ', name:'space'}]
		
	];
})(jQuery);

(function($) {
	$.keyboard.keyboards.qwertyMail	= [
		['q','w','e','r','t','y','u','i','o','p','.','_'],
		['a','s','d','f','g','h','j','k','l','ñ','@','-'],
		['z','x','c','v','b','n','m', {label: 'Space', text:' ', name:'space'},{label:'',text:'<',name:'backSpace',action:function(e){return false;}}]
		
	];
})(jQuery);

(function($) {
	$.keyboard.keyboards.qwertyArabeMail	= [
		['q','w','e','r','t','y','u','i','o','p','.','_'],
		['a','s','d','f','g','h','j','k','l','@','-'],
		['z','x','c','v','b','n','m', {label: 'Space', text:' ', name:'space'},{label:'',text:'<',name:'backSpace',action:function(e){return false;}}]

	];
})(jQuery);