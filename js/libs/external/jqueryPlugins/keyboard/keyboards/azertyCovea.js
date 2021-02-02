(function($) {
	$.keyboard.keyboards.azertyCovea	= [
		['0','1','2','3','4','5','6','7','8','9'],
		['a','z','e','r','t','y','u','i','o','p',{text:'←',name:'backSpace',action:function(e){return false;}}],
		['q','s','d','f','g','h','j','k','l','m',{label:'⏎' ,text:'\n',name:'return'}],
		['w','x','c','v','b','n','.','-',{text:'\''}],
		[{label: 'Espace', text:' ', name:'space'}]
	]
})(jQuery);