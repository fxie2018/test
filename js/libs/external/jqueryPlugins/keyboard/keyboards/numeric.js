(function($) {
    $.keyboard.keyboards.numeric = [
        [{text: '1'}, {text: '2'}, {text: '3'}], 
        [{text: '4'}, {text: '5'}, {text: '6'}], 
        [{text: '7'}, {text: '8'}, {text: '9'}], 
        [{text: '+', name:'plus'}, {text: '0'}, {text:'C',name:'backSpace',action:function(e){return false;}} ]
   ];
})(jQuery);

(function($) {
    $.keyboard.keyboards.numericMcKinsey = [
        [{text: '1'}, {text: '2'}, {text: '3'}], 
        [{text: '4'}, {text: '5'}, {text: '6'}], 
        [{text: '7'}, {text: '8'}, {text: '9'}], 
        [{text:'C',name:'reset',action:function(e){return false;}}, {text: '0'}, {text:'←',name:'backSpace',action:function(e){return false;}} ]
   ];
})(jQuery);

(function($) {
    $.keyboard.keyboards.numericAntea = [
        [{text: '0'}, {text: '1'}, {text: '2'}, {text: '3'}], 
        [{text: '4'}, {text: '5'}, {text: '6'}], 
        [{text: '7'}, {text: '8'}, {text: '9'}]
   ];
})(jQuery);

(function($) {
    $.keyboard.keyboards.numericMrBricolage = [
        [{text: '1'}, {text: '2'}, {text: '3'}], 
        [{text: '4'}, {text: '5'}, {text: '6'}], 
        [{text: '7'}, {text: '8'}, {text: '9'}],
        [{text: '0'}]
   ];
})(jQuery);