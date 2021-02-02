define('searchView', [
    'backbone',
    'text!views/searchView/searchTemplate.html',
    'showView'
], function(Backbone, SearchTemplate,ShowView) {

    var SearchView = Backbone.View.extend({
        el: '#search',

        template: _.template(SearchTemplate),

        events: {
            "click .searchBtn":"search"
        },

        initialize: function() {

        },

        render: function() {
            this.$el.html(this.template());
        },
        search:function(){
            var value = this.$el.find("#showSearch input").val();
            this.renderSubview(value);
        },
        renderSubview:function(value){
            this.clearScreen();
            this.subview = new ShowView();
            this.subview.searchResult(value);
        },
        clearScreen:function(){
            if (this.subview) {
                this.subview.remove();
            }
            this.$el.find("#searchResult").html("<div id='show'></div>")
        }
    })

    return SearchView;

});
