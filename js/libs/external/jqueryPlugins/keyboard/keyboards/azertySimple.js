(function($) {
	$.keyboard.keyboards.azertySimple	= [
		['a','z','e','r','t','y','u','i','o','p',{label:' ',text:'←',name:'backSpace',action:function(e){return false;}}],
		['q','s','d','f','g','h','j','k','l','m'],
		['w','x','c','v','b','n','.','-','\'',{text:'\n',name:'return'}],
		[{text:' ', name:'space'}]
	]
})(jQuery);


(function($) {
	$.keyboard.keyboards.azertyLetterOnly	= [
		['a','z','e','r','t','y','u','i','o','p'],
		['q','s','d','f','g','h','j','k','l','m'],
		['w','x','c','v','b','n',{label:'espace', text:' ', name:'space'} ,{label:'←', text:'←',name:'backSpace',action:function(e){return false;}}],
		
	]
})(jQuery);

(function($) {
	$.keyboard.keyboards.qwertySimple	= [
		['q','w','e','r','t','y','u','i','o','p',{label:' ',text:'←',name:'backSpace',action:function(e){return false;}}],
		['a','s','d','f','g','h','j','k','l','@'],
		['z','x','c','v','b','n','m','.','-','\'',{text:'\n',name:'return'}],
		[{text:' ', name:'space'}]
	]
})(jQuery);

(function($) {
	$.keyboard.keyboards.qwertyMailEn	= [
		['q','w','e','r','t','y','u','i','o','p','.','_'],
		['a','s','d','f','g','h','j','k','l','@','-'],
		['z','x','c','v','b','n','m', {label: 'Space', text:' ', name:'space'},{label:'',text:'<',name:'backSpace',action:function(e){return false;}}]
		
	];
})(jQuery);

(function($) {
	$.keyboard.keyboards.qwertyMailBrico	= [
		['q','w','e','r','t','y','u','i','o','p','.','_'],
		['a','s','d','f','g','h','j','k','l','@','-','!','?'],
		['z','x','c','v','b','n','m', {label: 'Espace', text:' ', name:'space'},{label:'',text:'<',name:'backSpace',action:function(e){return false;}}]
		
	];
})(jQuery);




(function($) {
	$.keyboard.keyboards.russian	= [
		['ё','1','2','3','4','5','6','7','8','9','0',{label:' ',text:'←',name:'backSpace',action:function(e){return false;}}],
		['й','ц','у','к','е','н','г','ш','щ','з','х','ъ'],
		['ф','ы','в','а','п','р','о','л','д','ж','э'],
		['-','я','ч','с','м','и','т','ь','б','ю',{text:'\n',name:'return'}],
		[{text:' ', name:'space'}]
	]
})(jQuery);

(function($) {
	$.keyboard.keyboards.azertySimpleAuchan	= [
		['a','z','e','r','t','y','u','i','o','p',{text:'←',name:'backSpace',action:function(e){return false;}}],
		['-','q','s','d','f','g','h','j','k','l','m'],
		['w','x','c','v','b','n',{label: 'Espace',text:' ', name:'space'}]
	]
})(jQuery);

(function($) {
	$.keyboard.keyboards.azertySimpleMrBricolage = [
		['a','z','e','r','t','y','u','i','o','p',{text:'←',name:'backSpace',action:function(e){return false;}}],
		['q','s','d','f','g','h','j','k','l','m'],
		['w','x','c','v','b','n',{label: 'Espace',text:' ', name:'space'}]
	]
})(jQuery);

(function($) {
	$.keyboard.keyboards.azertyMail	= [
		['a','z','e','r','t','y','u','i','o','p','.','_'],
		['q','s','d','f','g','h','j','k','l','@','-'],
		['w','x','c','v','b','n','m', {label: 'Space', text:' ', name:'space'},{label:'',text:'<',name:'backSpace',action:function(e){return false;}}]
		
	];
})(jQuery);

(function($) {
	$.keyboard.keyboards.azertyMailFr	= [
		['a','z','e','r','t','y','u','i','o','p','.','_'],
		['q','s','d','f','g','h','j','k','l','@','-'],
		['w','x','c','v','b','n','m', {label: 'Espace', text:' ', name:'space'},{label:'',text:'<',name:'backSpace',action:function(e){return false;}}]
		
	];
})(jQuery);

(function($) {
	$.keyboard.keyboards.azertyMailBrico	= [
		['a','z','e','r','t','y','u','i','o','p','.','_'],
		['q','s','d','f','g','h','j','k','l','@','-','!','?'],
		['w','x','c','v','b','n','m', {label: 'Espace', text:' ', name:'space'},{label:'',text:'<',name:'backSpace',action:function(e){return false;}}]
		
	];
})(jQuery);




