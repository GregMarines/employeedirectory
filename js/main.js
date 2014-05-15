var app = {

    showAlert: function (message, title) {
        if (navigator.notification) {
            navigator.notification.alert(message, null, title, 'OK');
        } else {
            alert(title ? (title + ": " + message) : message);
        }
    },

    initialize: function() {
        var self = this;
        this.store = new MemoryStore(function() {
			self.showAlert('Stores Initialized', 'Info');
            $('body').append(new HomeView(self.store).render().el);
        });
    }

};
 
app.initialize();