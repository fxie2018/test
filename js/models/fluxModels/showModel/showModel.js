define('showModel', [
    'backbone',
    'fluxConf',
    'requestConf'
], function(Backbone, FluxConf,RequestConf) {

    var ShowModel = Backbone.Model.extend({
        initialize: function() {},

        fetch: function(text,fakeURL) {
            var self = this;
            var url = FluxConf.show_url+ text.trim().replace(/\s+/g, '+');
            if(fakeURL){
                url = location.origin + "/test/js/conf/resultFakedata.json";
            }
            var options = {
                url: url,
                type: 'GET',
                headers: {
                    "Authorization":"Bearer "+ RequestConf.token
                },
                timeout: 10000,
                error: function(model, err) {
                    console.log('MODEL ERROR FETCH', model, err);
                    self.fetch(text,true)
                }
            }
            return Backbone.Model.prototype.fetch.call(this, options);
        },

        parse: function(response) {
            this.set({
                result:response
            })
            $(document).trigger("fakedataTrigger")
        }

    });

    return ShowModel;
});
