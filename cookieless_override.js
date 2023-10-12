Object.defineProperty(document, 'cookie', {
    get: function() {
        // need to add a fake _ga cookie to the real cookies collection.
        var realCookies = Object.getOwnPropertyDescriptor(Document.prototype, 'cookie').get.call(document);
        // make up a random ID here
        var random_id = Math.floor(Math.random() * 1000000000) + '.' + Math.floor(Math.random() * 1000000000);
        if (realCookies.trim().length > 0) {
            realCookies += '; ';
        }
        realCookies += '_ga=GA1.1.' + random_id;
        return realCookies;
    },
    set: function(value) {
        // just dump any attempts to set a ga cookie
        if (value.trim().startsWith('_ga')) {
            // do nothing
        } else {
            // accessing underlying cookie object to set the cookie
            Object.getOwnPropertyDescriptor(Document.prototype, 'cookie').set.call(document, value);
        }
    }
});