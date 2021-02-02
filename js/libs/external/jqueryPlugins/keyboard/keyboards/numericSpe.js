(function($) {
    $.keyboard.keyboards.numeric = [
        [{text: '1'}, {text: '2'}, {text: '3'}], 
        [{text: '4'}, {text: '5'}, {text: '6'}], 
        [{text: '7'}, {text: '8'}, {text: '9'}], 
        [{text: '+', name:'plus'}, {text: '0'}, {text:'←',name:'backSpace',action:function(e){return false;}} ]
   ];
})(jQuery);

(function($) {
    $.keyboard.keyboards.numericPA = [
        [{text: '1'}, {text: '2'}, {text: '3'}], 
        [{text: '4'}, {text: '5'}, {text: '6'}], 
        [{text: '7'}, {text: '8'}, {text: '9'}], 
        [{text: ','}, {text: '0'}, {text:'C',name:'backSpace',action:function(e){return false;}} ]
   ];
})(jQuery);