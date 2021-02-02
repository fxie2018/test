define('showView', [
    'backbone',
    'text!views/showView/showTemplate.html',
    'showModel'
], function(Backbone, ShowTemplate,ShowModel) {

    var ShowView = Backbone.View.extend({
        el: '#show',

        template: _.template(ShowTemplate),

        events: {
            "click .search":"search"
        },

        initialize: function() {
            var self = this;
            $(document).unbind("fakedataTrigger").bind("fakedataTrigger",this.render.bind(self));
        },

        render: function() {
            var result = this.showModel.get("result");
            this.$el.html(this.template(result));
        },
        searchResult : function(value){
            var self = this;
            this.showModel = new ShowModel();
            this.showModel.fetch(value).then(function () {
                self.render();
            })
        }
    })

    return ShowView;

});
